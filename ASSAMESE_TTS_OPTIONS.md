# Text-to-Speech Options for Assamese Language

**Research Date:** 2025-11-12
**Purpose:** Find TTS solutions for Learn Assamese app

## Executive Summary

After researching major cloud providers and Indian language platforms, **three viable options** support Assamese text-to-speech:

1. ✅ **Microsoft Azure Speech Service** - Commercial, production-ready
2. ✅ **Bhashini (Government of India)** - Free for PoC, paid for production
3. ✅ **AI4Bharat Indic-TTS** - Open-source, self-hosted

❌ **Not Supported:**
- Google Cloud Text-to-Speech
- AWS Polly
- Sarvam AI (confirmed in earlier testing)

---

## Option 1: Microsoft Azure Speech Service ⭐ RECOMMENDED

### ✅ Pros
- **Production-ready** neural voices
- **High quality** synthesis
- **Two voice options:** Female (`as-IN-YashicaNeural`) and Male (`as-IN-PriyomNeural`)
- **Reliable infrastructure** (Microsoft Azure)
- **Good documentation** and SDK support
- **Free tier available:** 0.5 million characters/month
- **Easy integration** with REST API or SDKs

### ❌ Cons
- **Costs after free tier:** $15 per million characters
- **Limited prosody:** Phonemes, custom lexicon, and visemes not supported
- **Cloud dependency:** Requires internet connection

### Technical Details

**Locale Code:** `as-IN`
**Voice Names:**
- `as-IN-YashicaNeural` (Female)
- `as-IN-PriyomNeural` (Male)

**Voice Type:** Neural (advanced synthesis)

### Pricing

| Tier | Characters/Month | Cost |
|------|------------------|------|
| Free (F0) | 500,000 | $0 |
| Standard | Per million chars | $15 |

**For your demo app:** Assuming 100 users, 50 words/user/day, ~250 chars/user/day:
- 25,000 characters/day
- 750,000 characters/month
- **Cost: ~$11.25/month** (or free if under 500k/month)

### Implementation Example

```javascript
// Using Azure Speech SDK
const sdk = require('microsoft-cognitiveservices-speech-sdk');

const speechConfig = sdk.SpeechConfig.fromSubscription(
  process.env.AZURE_SPEECH_KEY,
  process.env.AZURE_SPEECH_REGION
);

speechConfig.speechSynthesisVoiceName = 'as-IN-YashicaNeural';

const synthesizer = new sdk.SpeechSynthesizer(speechConfig);

synthesizer.speakTextAsync(
  'নমস্কাৰ',  // Assamese text
  result => {
    if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
      console.log('Audio synthesized successfully');
      // Play audio from result.audioData
    }
    synthesizer.close();
  }
);
```

**REST API Example:**

```bash
curl -X POST "https://REGION.tts.speech.microsoft.com/cognitiveservices/v1" \
  -H "Ocp-Apim-Subscription-Key: YOUR_KEY" \
  -H "Content-Type: application/ssml+xml" \
  -H "X-Microsoft-OutputFormat: audio-16khz-32kbitrate-mono-mp3" \
  -d '<speak version="1.0" xml:lang="as-IN">
        <voice name="as-IN-YashicaNeural">নমস্কাৰ</voice>
      </speak>'
```

### Resources
- **Documentation:** https://learn.microsoft.com/en-us/azure/ai-services/speech-service/
- **Pricing:** https://azure.microsoft.com/pricing/details/cognitive-services/speech-services/
- **Free Trial:** https://azure.microsoft.com/free/cognitive-services/

---

## Option 2: Bhashini (Government of India)

### ✅ Pros
- **Government initiative** - supports Indian languages
- **Free for PoC/testing**
- **Open models** (AI4Bharat) integrated
- **Supports 13 Indian languages** including Assamese
- **Very affordable** paid option (~₹250/month for production)
- **India-focused** with good regional support

### ❌ Cons
- **Requires approval** for production use
- **Less documentation** than Azure
- **Newer platform** - might have stability issues
- **PoC limitations** - need to upgrade for production
- **May have quotas** or rate limits

### Technical Details

**Language Code:** `asm_Beng` (Assamese in Bengali script)
**Model Architecture:** FastPitch + HiFi-GAN V1
**Voice:** Mixed gender (male + female)

### Pricing

| Tier | Usage | Cost |
|------|-------|------|
| Free (PoC) | Testing/Development | Free |
| Production | Contact Bhashini team | Custom pricing |
| Commercial Service | 50,000 chars/day | ₹250/month (~$3) |
| Commercial Service | 50,000 chars/day | ₹2,500/year (~$30) |

**For your demo app:** ₹250/month (~$3) is very affordable!

### Implementation Example

```javascript
// Bhashini API example
const bhashiniConfig = {
  pipelineTasks: [{
    taskType: 'tts',
    config: {
      language: {
        sourceLanguage: 'as'  // Assamese
      },
      gender: 'female'
    }
  }]
};

// Step 1: Get pipeline configuration
const pipelineResponse = await fetch('https://meity-auth.ulcacontrib.org/ulca/apis/v0/model/getModelsPipeline', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'ulcaApiKey': process.env.BHASHINI_ULCA_API_KEY,
    'userId': process.env.BHASHINI_USER_ID
  },
  body: JSON.stringify(bhashiniConfig)
});

const pipelineData = await pipelineResponse.json();
const serviceId = pipelineData.pipelineResponseConfig[0].config[0].serviceId;

// Step 2: Perform TTS
const ttsResponse = await fetch(pipelineData.pipelineInferenceAPIEndPoint.callbackUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': pipelineData.pipelineInferenceAPIEndPoint.inferenceApiKey.value
  },
  body: JSON.stringify({
    pipelineTasks: [{
      taskType: 'tts',
      config: {
        language: { sourceLanguage: 'as' },
        serviceId: serviceId,
        gender: 'female'
      }
    }],
    inputData: {
      input: [{ source: 'নমস্কাৰ' }]  // Assamese text
    }
  })
});

const ttsData = await ttsResponse.json();
const audioBase64 = ttsData.pipelineResponse[0].audio[0].audioContent;
```

### Resources
- **Official Portal:** https://bhashini.gov.in/
- **API Documentation:** https://bhashini.gitbook.io/bhashini-apis/
- **Registration:** https://bhashini.gov.in/ulca
- **Commercial Service:** https://www.bhashiniservices.com/tts

---

## Option 3: AI4Bharat Indic-TTS (Open Source)

### ✅ Pros
- **Completely free** (MIT license)
- **No API limits** or usage charges
- **Self-hosted** - full control
- **Open-source** - can customize models
- **State-of-the-art** Indian language models
- **No cloud dependency** after model download
- **Privacy** - data stays on your servers

### ❌ Cons
- **Requires hosting** - need own infrastructure
- **Technical setup** - more complex than API
- **Maintenance burden** - you manage updates
- **GPU recommended** for real-time synthesis
- **Deployment complexity** for production scale
- **No official support** (community-based)

### Technical Details

**Language:** Assamese (among 13 supported)
**Model Architecture:**
- **Acoustic Model:** FastPitch
- **Vocoder:** HiFi-GAN V1

**Training:** Mixed gender (male + female speakers)
**Performance:** State-of-the-art for Indian languages

### Implementation

**Installation:**
```bash
# Create conda environment
conda create -n tts-env python=3.8
conda activate tts-env

# Install PyTorch
pip3 install torch torchvision torchaudio

# Clone and install TTS fork
git clone https://github.com/gokulkarthik/TTS
cd TTS && pip3 install -e .[all]

# Download Assamese models (from GitHub releases)
wget https://github.com/AI4Bharat/Indic-TTS/releases/download/v1-checkpoints/assamese.zip
unzip assamese.zip
```

**Usage:**
```bash
python3 -m TTS.bin.synthesize \
    --text "নমস্কাৰ" \
    --model_path assamese/fastpitch/best_model.pth \
    --config_path assamese/config.json \
    --vocoder_path assamese/hifigan/best_model.pth \
    --vocoder_config_path assamese/hifigan/config.json \
    --out_path output.wav
```

**Python API:**
```python
from TTS.utils.synthesizer import Synthesizer

synthesizer = Synthesizer(
    tts_checkpoint='assamese/fastpitch/best_model.pth',
    tts_config_path='assamese/config.json',
    vocoder_checkpoint='assamese/hifigan/best_model.pth',
    vocoder_config='assamese/hifigan/config.json'
)

# Generate audio
wav = synthesizer.tts('নমস্কাৰ')

# Save to file
synthesizer.save_wav(wav, 'output.wav')
```

### Deployment Options

1. **Local development:** Run on your machine
2. **Docker container:** Package models + inference code
3. **Cloud VM:** Deploy on AWS/GCP/Azure VM with GPU
4. **Serverless:** Use AWS Lambda with EFS for models
5. **API wrapper:** Create REST API around the model

### Resources
- **GitHub:** https://github.com/AI4Bharat/Indic-TTS
- **Demo:** https://models.ai4bharat.org
- **Paper:** Check repository for research paper
- **Models:** Download from GitHub releases

---

## Comparison Table

| Feature | Microsoft Azure | Bhashini | AI4Bharat (OSS) |
|---------|----------------|----------|-----------------|
| **Assamese Support** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Voice Quality** | ⭐⭐⭐⭐⭐ High | ⭐⭐⭐⭐ Good | ⭐⭐⭐⭐ Good |
| **Voices Available** | 2 (M/F) | Mixed | Mixed |
| **Free Tier** | 500k chars/mo | PoC only | Unlimited |
| **Paid Pricing** | $15/M chars | ~₹250/mo (~$3) | $0 (hosting cost) |
| **Setup Complexity** | ⭐ Easy | ⭐⭐ Medium | ⭐⭐⭐⭐ Complex |
| **Documentation** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Reliability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ (depends) |
| **Latency** | Low (cloud) | Medium | Very Low (local) |
| **Privacy** | Cloud-based | Cloud-based | Self-hosted |
| **Support** | Commercial | Government | Community |
| **Production Ready** | ✅ Yes | ✅ Yes (paid) | ⚠️ DIY |
| **Best For** | Production apps | Indian startups | Privacy-focused |

---

## Recommendations for Your Demo App

### 🥇 Best Choice: Microsoft Azure Speech Service

**Why:**
1. **Free tier covers demo usage** - 500k characters/month
2. **Easy integration** - 15-30 minutes to implement
3. **Reliable** - Microsoft's proven infrastructure
4. **Good documentation** - Easy to debug
5. **Production-ready** - Can scale without changes

**Implementation Timeline:**
- **Day 1:** Sign up for Azure, get API keys
- **Day 1-2:** Integrate Azure Speech SDK
- **Day 2:** Test with all vocabulary items
- **Day 3:** Deploy and monitor usage

### 🥈 Alternative: Bhashini (for Cost-Conscious)

**Why:**
1. **Much cheaper** for production (₹250/mo vs $15)
2. **Government-backed** - supports Indian languages
3. **Good for Indian audience** - local hosting

**When to choose:**
- Budget is primary concern
- Willing to handle more complex API
- Want to support Indian government initiatives

### 🥉 Advanced: AI4Bharat (for Privacy/Control)

**Why:**
1. **Completely free** - no ongoing costs
2. **Full control** - customize as needed
3. **Privacy** - audio doesn't leave your servers

**When to choose:**
- Have DevOps resources for hosting
- Privacy is a requirement
- Want to customize voice models
- Expect very high usage (cost savings at scale)

---

## Implementation Plan for Your App

### Phase 1: Quick Win with Azure (Recommended)

**Week 1: Azure Integration**

1. **Sign up for Azure**
   - Create free account
   - Enable Speech Services
   - Get subscription key and region

2. **Update sarvam.ts**
   ```typescript
   // Add Azure TTS as fallback/alternative
   async textToSpeech(text: string): Promise<{ audioBase64: string; format: string }> {
     try {
       const response = await fetch(
         `https://${process.env.AZURE_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`,
         {
           method: 'POST',
           headers: {
             'Ocp-Apim-Subscription-Key': process.env.AZURE_SPEECH_KEY!,
             'Content-Type': 'application/ssml+xml',
             'X-Microsoft-OutputFormat': 'audio-16khz-32kbitrate-mono-mp3'
           },
           body: `<speak version='1.0' xml:lang='as-IN'>
                    <voice name='as-IN-YashicaNeural'>${text}</voice>
                  </speak>`
         }
       );

       if (!response.ok) throw new Error(`Azure TTS failed: ${response.status}`);

       const audioBuffer = await response.arrayBuffer();
       const base64 = Buffer.from(audioBuffer).toString('base64');

       return {
         audioBase64: base64,
         format: 'audio/mp3'
       };
     } catch (error) {
       console.error('Azure TTS error:', error);
       return { audioBase64: '', format: 'mock' };
     }
   }
   ```

3. **Add Netlify environment variables**
   ```
   AZURE_SPEECH_KEY=your_key_here
   AZURE_REGION=eastus
   ```

4. **Test and deploy**

**Effort:** ~4 hours
**Cost:** Free (demo usage under 500k chars/month)

### Phase 2: Optimize with Bhashini (Optional)

If Azure costs become an issue later:

1. **Register on Bhashini portal**
2. **Get API credentials**
3. **Implement Bhashini as primary, Azure as fallback**
4. **Monitor costs and quality**

**Effort:** ~8 hours
**Cost:** ₹250/month (~$3)

### Phase 3: Self-Host (Advanced, Optional)

For large scale or privacy needs:

1. **Set up GPU server** (AWS p3.2xlarge or similar)
2. **Deploy AI4Bharat models**
3. **Create API wrapper**
4. **Load balance with cloud TTS for redundancy**

**Effort:** ~40 hours
**Cost:** Variable (server hosting)

---

## Quick Start: Azure TTS Integration

### Step 1: Create Azure Account

1. Go to https://azure.microsoft.com/free/
2. Sign up (requires credit card, but free tier is truly free)
3. Navigate to Speech Services

### Step 2: Get Credentials

1. Create a Speech resource
2. Copy the **Key** and **Region**
3. Add to Netlify environment variables:
   - `AZURE_SPEECH_KEY`
   - `AZURE_REGION`

### Step 3: Update Code

See implementation example in "Phase 1" above.

### Step 4: Test

```bash
# Local testing
export AZURE_SPEECH_KEY="your_key"
export AZURE_REGION="eastus"
npm run dev

# Navigate to lesson, click audio button
# Should hear Assamese pronunciation!
```

---

## Summary

**TL;DR for your demo:**

1. ✅ **Use Microsoft Azure** - easiest, free tier sufficient
2. 🔧 **Implementation time:** ~4 hours
3. 💰 **Cost:** $0/month (free tier covers demo)
4. 🚀 **Quality:** High (neural voices)
5. 📈 **Scalability:** Ready for production

**Next Steps:**
1. Create Azure account
2. Get Speech Service API key
3. Update your code with Azure TTS
4. Deploy to Netlify
5. Test audio pronunciation!

---

**Questions? See:**
- Azure docs: https://learn.microsoft.com/azure/ai-services/speech-service/
- Bhashini: https://bhashini.gov.in/
- AI4Bharat: https://github.com/AI4Bharat/Indic-TTS
