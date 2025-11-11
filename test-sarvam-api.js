// Test Sarvam AI API connection
const SARVAM_API_KEY = process.env.SARVAM_AP_API_KEY;

async function testSarvamAPI() {
  console.log('Testing Sarvam AI API...');
  console.log('API Key available:', SARVAM_API_KEY ? 'Yes (starts with: ' + SARVAM_API_KEY.substring(0, 10) + '...)' : 'No');

  // Test 1: Translation API (English to Assamese)
  try {
    console.log('\n--- Test 1: Translation (English → Assamese) ---');
    const translationResponse = await fetch('https://api.sarvam.ai/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-subscription-key': SARVAM_API_KEY
      },
      body: JSON.stringify({
        input: 'Hello, how are you?',
        source_language_code: 'en-IN',
        target_language_code: 'as-IN',
        speaker_gender: 'Female',
        mode: 'formal',
        model: 'mayura:v1',
        enable_preprocessing: true
      })
    });

    if (translationResponse.ok) {
      const translationData = await translationResponse.json();
      console.log('✅ Translation successful!');
      console.log('English:', 'Hello, how are you?');
      console.log('Assamese:', translationData.translated_text);
    } else {
      console.log('❌ Translation failed:', translationResponse.status, translationResponse.statusText);
      const errorText = await translationResponse.text();
      console.log('Error details:', errorText);
    }
  } catch (error) {
    console.log('❌ Translation error:', error.message);
  }

  // Test 2: Text-to-Speech API (Assamese)
  try {
    console.log('\n--- Test 2: Text-to-Speech (Assamese) ---');
    const ttsResponse = await fetch('https://api.sarvam.ai/text-to-speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-subscription-key': SARVAM_API_KEY
      },
      body: JSON.stringify({
        inputs: ['নমস্কাৰ'],
        target_language_code: 'as-IN',
        speaker: 'meera',
        pitch: 0,
        pace: 1.0,
        loudness: 1.5,
        speech_sample_rate: 8000,
        enable_preprocessing: true,
        model: 'bulbul:v1'
      })
    });

    if (ttsResponse.ok) {
      const ttsData = await ttsResponse.json();
      console.log('✅ Text-to-Speech successful!');
      console.log('Audio available:', ttsData.audios && ttsData.audios.length > 0 ? 'Yes' : 'No');
      if (ttsData.audios && ttsData.audios[0]) {
        console.log('Audio format: Base64 encoded');
        console.log('Audio length:', ttsData.audios[0].length, 'characters');
      }
    } else {
      console.log('❌ Text-to-Speech failed:', ttsResponse.status, ttsResponse.statusText);
      const errorText = await ttsResponse.text();
      console.log('Error details:', errorText);
    }
  } catch (error) {
    console.log('❌ Text-to-Speech error:', error.message);
  }

  console.log('\n=== Sarvam AI API Test Complete ===');
}

testSarvamAPI();
