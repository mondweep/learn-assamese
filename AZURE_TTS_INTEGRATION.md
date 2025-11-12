# Azure Text-to-Speech Integration

## Overview

The Learn Assamese app now uses **Microsoft Azure Speech Service** for Assamese text-to-speech functionality.

### Why Azure?
- ✅ Supports Assamese (as-IN) with neural voices
- ✅ High-quality speech synthesis
- ✅ Free tier: 500,000 characters/month
- ✅ Two voice options: Female and Male

---

## Configuration

### Environment Variables

Add these to your Netlify environment variables:

```bash
NEXT_PUBLIC_AZURE_SPEECH_KEY=your_azure_subscription_key
NEXT_PUBLIC_AZURE_REGION=your_azure_region
```

Or for local development (`.env.local`):

```bash
AZURE_SPEECH_KEY=your_azure_subscription_key
AZURE_REGION=your_azure_region
```

### Getting Azure Credentials

1. **Create Azure Account:** https://azure.microsoft.com/free/
2. **Create Speech Service Resource:**
   - Navigate to Azure Portal
   - Create Resource → Search "Speech"
   - Select **Free F0** pricing tier
   - Note your **Key** and **Region**

3. **Add to Netlify:**
   - Site Settings → Environment Variables
   - Add both variables
   - Redeploy site

---

## Available Voices

### Female Voice (Default)
- **Name:** `as-IN-YashicaNeural`
- **Language:** Assamese (India)
- **Type:** Neural

### Male Voice
- **Name:** `as-IN-PriyomNeural`
- **Language:** Assamese (India)
- **Type:** Neural

---

## Usage

### In Your Code

The integration is already complete in `prototype/src/lib/sarvam.ts`:

```typescript
import { sarvamClient, speakAssamese } from '@/lib/sarvam';

// Default (female voice)
await speakAssamese('নমস্কাৰ');

// Or directly with voice selection
const result = await sarvamClient.textToSpeech('নমস্কাৰ', 'female');
// or 'male' for male voice

// Play the audio
if (result.audioBase64) {
  await sarvamClient.playAudio(result.audioBase64, result.format);
}
```

### In Components

Audio buttons in lessons automatically use the Azure TTS:

```typescript
// AudioPlayer component already integrated
<AudioPlayer text="নমস্কাৰ" />
```

---

## How It Works

1. **Text Input:** Assamese text (e.g., "নমস্কাৰ")
2. **SSML Generation:** Creates Speech Synthesis Markup Language
   ```xml
   <speak version='1.0' xml:lang='as-IN'>
     <voice name='as-IN-YashicaNeural'>নমস্কাৰ</voice>
   </speak>
   ```
3. **Azure API Call:** Sends to Azure Speech Service
4. **Audio Response:** Receives MP3 audio (base64 encoded)
5. **Playback:** Converts to blob and plays in browser

---

## Error Handling

### No Credentials
If Azure credentials are not configured:
- Falls back to mock mode (no audio)
- Logs warning: "⚠️ Azure Speech credentials not configured"
- App continues to work without audio

### API Errors
If Azure API fails:
- Catches error gracefully
- Returns mock format
- Logs error details for debugging

---

## Free Tier Limits

### Azure Speech Service Free (F0) Tier

| Feature | Limit |
|---------|-------|
| Text-to-Speech | 500,000 characters/month |
| Price | $0 |
| Overage | Not allowed (upgrade to Standard) |

### Estimating Usage

**For your demo app:**
- 100 users
- 50 words per user per day
- ~250 characters per user per day
- = 25,000 characters/day
- = 750,000 characters/month

**Conclusion:** You'll exceed free tier slightly. Options:
1. Stay under 500k by limiting usage
2. Upgrade to Standard ($15/million chars)
3. Use multiple free accounts (not recommended)

**Recommended:** Monitor usage in Azure Portal, upgrade if needed (~$11/month)

---

## Monitoring Usage

### Azure Portal

1. Go to your Speech Service resource
2. Click **Metrics** in left menu
3. Add metric: **Synthesized Characters**
4. View usage over time

### Set Up Alerts

1. In Azure Portal → Alerts
2. Create alert rule
3. Condition: Synthesized characters > 450,000
4. Get email when approaching limit

---

## Testing

### Local Testing

```bash
# Set environment variables
export AZURE_SPEECH_KEY="your_key"
export AZURE_REGION="eastus"

# Run dev server
cd prototype
npm run dev

# Navigate to http://localhost:3000/learn/lesson-01
# Click audio buttons to test
```

### Production Testing

After deploying to Netlify:
1. Navigate to any lesson
2. Click the audio/speaker icon
3. Should hear Assamese pronunciation
4. Check browser console for logs:
   - "🔊 Azure TTS request: ..."
   - "✅ Azure TTS success: ..."
   - "🔊 Playing audio: ..."

---

## Troubleshooting

### Audio Not Playing

**Issue:** Click audio button, nothing happens

**Check:**
1. **Environment variables set?**
   - Netlify: Site Settings → Environment Variables
   - Look for `NEXT_PUBLIC_AZURE_SPEECH_KEY`

2. **Browser console errors?**
   - F12 → Console tab
   - Look for Azure TTS errors

3. **Correct region?**
   - Verify `AZURE_REGION` matches your Speech resource
   - Common regions: `eastus`, `westus`, `southeastasia`, `centralindia`

4. **API key valid?**
   - Check in Azure Portal → Keys and Endpoint
   - Try regenerating key if needed

### 401 Unauthorized

**Issue:** `Azure TTS failed: 401`

**Solution:**
- API key is invalid or expired
- Regenerate key in Azure Portal
- Update Netlify environment variables
- Redeploy

### 403 Forbidden

**Issue:** `Azure TTS failed: 403`

**Solution:**
- Wrong region
- Resource not properly configured
- Check Azure Portal settings

### Mock Audio Message

**Issue:** Console shows "Mock audio playback"

**Solution:**
- Azure credentials not configured
- Check environment variables are prefixed with `NEXT_PUBLIC_`
- Redeploy after adding variables

---

## Code Structure

### Files Modified

1. **`prototype/src/lib/sarvam.ts`**
   - Added Azure environment variable configuration
   - Replaced textToSpeech() with Azure implementation
   - Updated playAudio() to handle MP3 format
   - Added browser-compatible base64 encoding

### Key Functions

```typescript
// Convert text to speech using Azure
async textToSpeech(text: string, voice: 'female' | 'male' = 'female')

// Play audio from base64
async playAudio(audioBase64: string, format: string)

// Helper for Assamese speech
async function speakAssamese(text: string)
```

---

## Migration from Sarvam AI

### What Changed

| Aspect | Before (Sarvam AI) | After (Azure) |
|--------|-------------------|---------------|
| Translation | ✅ Working | ✅ Still working |
| TTS Support | ❌ Not available | ✅ Available |
| Audio Format | N/A | MP3 |
| Voice Options | N/A | 2 (M/F) |
| Cost | Included | Free tier |

### What Stayed Same

- Translation API still uses Sarvam AI (`sarvam-translate:v1`)
- All lesson content unchanged
- UI/UX unchanged
- Fallback behavior (mock on error)

---

## Next Steps

### Immediate
1. ✅ Azure credentials added to Netlify
2. ✅ Code integrated and tested
3. 🔄 Deploy to production
4. 🔄 Test audio in production

### Future Enhancements

1. **Voice Selection UI**
   - Add toggle for male/female voice
   - User preference storage

2. **Playback Controls**
   - Speed control (0.5x to 2x)
   - Pause/resume
   - Replay button

3. **Caching**
   - Cache generated audio
   - Reduce API calls for repeated words
   - Save on costs

4. **Analytics**
   - Track which words are most played
   - Monitor usage patterns
   - Optimize based on data

---

## Resources

- **Azure Speech Docs:** https://learn.microsoft.com/azure/ai-services/speech-service/
- **Voice Gallery:** https://speech.microsoft.com/portal/voicegallery
- **Pricing:** https://azure.microsoft.com/pricing/details/cognitive-services/speech-services/
- **Free Account:** https://azure.microsoft.com/free/cognitive-services/

---

## Support

### Azure Issues
- **Azure Portal:** https://portal.azure.com
- **Support Tickets:** In Azure Portal → Help + Support
- **Documentation:** https://learn.microsoft.com/azure/

### App Issues
- Check browser console for errors
- Review Netlify deployment logs
- Verify environment variables

---

**Status:** ✅ Integration Complete
**Last Updated:** 2025-11-12
**Version:** 1.0
