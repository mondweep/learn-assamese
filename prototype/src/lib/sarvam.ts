// Sarvam AI API Client for Learn Assamese

const SARVAM_API_KEY = process.env.NEXT_PUBLIC_SARVAM_API_KEY || process.env.SARVAM_AP_API_KEY || '';
const SARVAM_BASE_URL = 'https://api.sarvam.ai';

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
        target_language_code: targetLanguageCode
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
   * Convert Assamese text to speech
   * Returns base64 encoded audio data
   */
  async textToSpeech(text: string): Promise<{ audioBase64: string; format: string }> {
    // Mock TTS for demo
    if (this.useMock) {
      await this.mockDelay(1000);
      console.log(`🔊 Mock TTS: Playing "${text}"`);
      // Return empty audio (in real scenario, would return actual audio)
      return {
        audioBase64: '',
        format: 'mock'
      };
    }

    // Real API call
    try {
      const requestBody = {
        inputs: [text],
        target_language_code: 'as-IN',
        speaker: 'anushka',
        model: 'bulbul:v2'
      };

      console.log('TTS API request:', { url: `${SARVAM_BASE_URL}/text-to-speech`, body: requestBody });

      const response = await fetch(`${SARVAM_BASE_URL}/text-to-speech`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-subscription-key': this.apiKey
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`TTS API failed: ${response.status}`, errorText);
        throw new Error(`TTS API failed: ${response.status}`);
      }

      const data = await response.json();
      console.log('TTS API response:', data);
      return {
        audioBase64: data.audios[0],
        format: 'audio/wav'
      };
    } catch (error) {
      console.error('TTS error:', error);
      // Return mock audio on error
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
      console.log('🔊 Mock audio playback');
      return;
    }

    try {
      const audioBlob = this.base64ToBlob(audioBase64, 'audio/wav');
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);

      await audio.play();

      // Cleanup after playing
      audio.addEventListener('ended', () => {
        URL.revokeObjectURL(audioUrl);
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
