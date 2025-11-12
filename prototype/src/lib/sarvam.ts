// Sarvam AI API Client for Learn Assamese
// Now with Azure Speech Service for TTS

const SARVAM_API_KEY = process.env.NEXT_PUBLIC_SARVAM_API_KEY || process.env.SARVAM_AP_API_KEY || '';
const SARVAM_BASE_URL = 'https://api.sarvam.ai';

// Azure Speech Service configuration
const AZURE_SPEECH_KEY = process.env.NEXT_PUBLIC_AZURE_SPEECH_KEY || process.env.AZURE_SPEECH_KEY || '';
const AZURE_REGION = process.env.NEXT_PUBLIC_AZURE_REGION || process.env.AZURE_REGION || 'eastus';

// Mock data for demo when API is not available
const mockTranslations: Record<string, string> = {
  'Hello': 'নমস্কাৰ',
  'Thank you': 'ধন্যবাদ',
  'How are you?': 'আপুনি কেনে আছে?',
  'Good morning': 'শুভ পুৱা',
  'I am fine': 'ভাল আছোঁ',
  'নমস্কাৰ': 'Hello',
  'ধন্যবাদ': 'Thank you',
  'আপুনি কেনে আছে?': 'How are you?',
};

export class SarvamClient {
  private apiKey: string;
  private useMock: boolean;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || SARVAM_API_KEY;
    // Use mock if no API key or in development
    this.useMock = !this.apiKey || this.apiKey.length < 10;

    if (this.useMock) {
      console.log('⚠️ Sarvam AI: Using mock data (API key not configured)');
    }
  }

  /**
   * Translate text between English and Assamese
   */
  async translate(
    text: string,
    targetLang: 'as' | 'en'
  ): Promise<{ translatedText: string; sourceLanguage: string }> {
    // Mock translation for demo
    if (this.useMock) {
      await this.mockDelay(800);
      const mockResult = mockTranslations[text] || `[${targetLang === 'as' ? 'Assamese' : 'English'} translation of: ${text}]`;
      return {
        translatedText: mockResult,
        sourceLanguage: targetLang === 'as' ? 'en-IN' : 'as-IN'
      };
    }

    // Real API call
    try {
      const sourceLang = targetLang === 'as' ? 'en-IN' : 'as-IN';
      const targetLanguageCode = targetLang === 'as' ? 'as-IN' : 'en-IN';

      const requestBody = {
        input: text,
        source_language_code: sourceLang,
        target_language_code: targetLanguageCode,
        model: 'sarvam-translate:v1'  // Required for Assamese support
      };

      console.log('Translation API request:', { url: `${SARVAM_BASE_URL}/translate`, body: requestBody });

      const response = await fetch(`${SARVAM_BASE_URL}/translate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-subscription-key': this.apiKey
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Translation API failed: ${response.status}`, errorText);
        throw new Error(`Translation API failed: ${response.status}`);
      }

      const data = await response.json();
      console.log('Translation API response:', data);
      return {
        translatedText: data.translated_text,
        sourceLanguage: sourceLang
      };
    } catch (error) {
      console.error('Translation error:', error);
      // Fallback to mock on error
      const mockResult = mockTranslations[text] || text;
      return {
        translatedText: mockResult,
        sourceLanguage: targetLang === 'as' ? 'en-IN' : 'as-IN'
      };
    }
  }

  /**
   * Convert Assamese text to speech using Azure Speech Service
   * Returns base64 encoded audio data
   *
   * Uses Microsoft Azure TTS with Assamese neural voices:
   * - as-IN-YashicaNeural (Female)
   * - as-IN-PriyomNeural (Male)
   */
  async textToSpeech(text: string, voice: 'female' | 'male' = 'female'): Promise<{ audioBase64: string; format: string }> {
    // Check if Azure credentials are available
    if (!AZURE_SPEECH_KEY || AZURE_SPEECH_KEY.length < 10) {
      console.warn('⚠️ Azure Speech credentials not configured. Using mock TTS.');
      await this.mockDelay(500);
      return {
        audioBase64: '',
        format: 'mock'
      };
    }

    try {
      // Select voice based on preference
      const voiceName = voice === 'female' ? 'as-IN-YashicaNeural' : 'as-IN-PriyomNeural';

      // Create SSML for Azure TTS
      const ssml = `<speak version='1.0' xml:lang='as-IN'>
        <voice name='${voiceName}'>${text}</voice>
      </speak>`;

      console.log(`🔊 Azure TTS request: "${text}" with voice ${voiceName}`);

      // Call Azure Speech Service
      const response = await fetch(
        `https://${AZURE_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`,
        {
          method: 'POST',
          headers: {
            'Ocp-Apim-Subscription-Key': AZURE_SPEECH_KEY,
            'Content-Type': 'application/ssml+xml',
            'X-Microsoft-OutputFormat': 'audio-16khz-32kbitrate-mono-mp3'
          },
          body: ssml
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Azure TTS failed: ${response.status}`, errorText);
        throw new Error(`Azure TTS failed: ${response.status}`);
      }

      // Convert audio to base64 (browser-compatible)
      const audioBuffer = await response.arrayBuffer();
      const uint8Array = new Uint8Array(audioBuffer);
      const binaryString = uint8Array.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
      const base64 = btoa(binaryString);

      console.log(`✅ Azure TTS success: ${base64.length} chars, ${audioBuffer.byteLength} bytes`);

      return {
        audioBase64: base64,
        format: 'audio/mp3'
      };
    } catch (error) {
      console.error('Azure TTS error:', error);
      // Return mock on error
      return {
        audioBase64: '',
        format: 'mock'
      };
    }
  }

  /**
   * Play audio from base64 encoded data
   */
  async playAudio(audioBase64: string, format: string): Promise<void> {
    if (format === 'mock' || !audioBase64) {
      console.log('🔊 Mock audio playback (no audio available)');
      return;
    }

    try {
      // Determine MIME type based on format
      const mimeType = format === 'audio/mp3' ? 'audio/mp3' : 'audio/wav';

      const audioBlob = this.base64ToBlob(audioBase64, mimeType);
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);

      console.log(`🔊 Playing audio: ${mimeType}, ${audioBase64.length} chars`);

      await audio.play();

      // Cleanup after playing
      audio.addEventListener('ended', () => {
        URL.revokeObjectURL(audioUrl);
        console.log('✅ Audio playback completed');
      });
    } catch (error) {
      console.error('Audio playback error:', error);
    }
  }

  /**
   * Helper: Convert base64 to Blob
   */
  private base64ToBlob(base64: string, contentType: string): Blob {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  }

  /**
   * Helper: Mock delay for realistic demo
   */
  private async mockDelay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Check if client is using mock data
   */
  public isMockMode(): boolean {
    return this.useMock;
  }
}

// Export singleton instance
export const sarvamClient = new SarvamClient();

// Helper function to speak Assamese text
export async function speakAssamese(text: string): Promise<void> {
  const result = await sarvamClient.textToSpeech(text);
  if (result.audioBase64) {
    await sarvamClient.playAudio(result.audioBase64, result.format);
  }
}

// Helper function for translation
export async function translateText(text: string, to: 'as' | 'en'): Promise<string> {
  const result = await sarvamClient.translate(text, to);
  return result.translatedText;
}
