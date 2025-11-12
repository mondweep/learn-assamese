# Sarvam AI Integration - Findings and Limitations

## Summary

After deploying the prototype and testing with real Sarvam AI API credentials, I discovered important limitations and fixed integration issues.

## ✅ What Works

### Translation API
**Status:** ✅ WORKING (after fix)

The translation API now works correctly with Assamese. Key details:

- **Endpoint:** `https://api.sarvam.ai/translate`
- **Model Required:** `sarvam-translate:v1` (Assamese is NOT supported in `mayura:v1`)
- **Supported Directions:**
  - English → Assamese (`en-IN` → `as-IN`)
  - Assamese → English (`as-IN` → `en-IN`)
- **Character Limit:** 2000 characters per request

**Example Request:**
```json
{
  "input": "Hello",
  "source_language_code": "en-IN",
  "target_language_code": "as-IN",
  "model": "sarvam-translate:v1"
}
```

**Example Response:**
```json
{
  "request_id": "...",
  "translated_text": "নমস্কাৰ",
  "source_language_code": "en-IN"
}
```

## ❌ What Doesn't Work

### Text-to-Speech API
**Status:** ❌ NOT AVAILABLE for Assamese

This is a **critical limitation** of the Sarvam AI platform:

- **Assamese (`as-IN`) is NOT supported** for text-to-speech
- Only 11 languages are supported:
  - `bn-IN` (Bengali)
  - `en-IN` (English)
  - `gu-IN` (Gujarati)
  - `hi-IN` (Hindi)
  - `kn-IN` (Kannada)
  - `ml-IN` (Malayalam)
  - `mr-IN` (Marathi)
  - `od-IN` (Odia)
  - `pa-IN` (Punjabi)
  - `ta-IN` (Tamil)
  - `te-IN` (Telugu)

**API Error When Attempting Assamese TTS:**
```json
{
  "error": {
    "message": "Validation Error(s):\n- target_language_code: Input should be 'bn-IN', 'en-IN', 'gu-IN', 'hi-IN', 'kn-IN', 'ml-IN', 'mr-IN', 'od-IN', 'pa-IN', 'ta-IN' or 'te-IN'",
    "code": "invalid_request_error"
  }
}
```

## Impact on the App

### Current Functionality
1. ✅ **Translation** - Works perfectly for English ↔ Assamese
2. ✅ **Vocabulary Display** - All Assamese text displays correctly with Noto Sans Assamese font
3. ✅ **Romanization** - Helps users with pronunciation
4. ❌ **Audio Pronunciation** - Not available (TTS limitation)

### User Experience
- Users can learn to read and write Assamese
- Users can see romanization to learn pronunciation
- Users **cannot** hear native pronunciation (major limitation for language learning)

## Recommendations

### Short-term Solutions

1. **Keep Current Implementation** (Already done)
   - Translation works ✅
   - Audio button shows but doesn't play (graceful degradation)
   - Console shows warning: "⚠️ TTS not available for Assamese"

2. **Add UI Notification**
   - Show banner: "Audio pronunciation coming soon"
   - Or: "Audio not yet available for Assamese"

3. **Enhance Romanization**
   - Emphasize romanization more prominently
   - Add pronunciation tips in English

### Medium-term Solutions

1. **Alternative TTS Providers**
   Research other Indian TTS providers that support Assamese:
   - Google Cloud Text-to-Speech (supports Assamese)
   - Microsoft Azure Speech Services
   - Amazon Polly (check Assamese support)
   - Bhashini (Government of India's language platform)

2. **Hybrid Approach**
   - Use Sarvam AI for translation (working great)
   - Use alternative provider for TTS

3. **Pre-recorded Audio**
   - Record native speakers for key vocabulary
   - Bundle audio files with the app
   - More authentic but less scalable

### Long-term Solutions

1. **Request Sarvam AI Support**
   - Contact Sarvam AI to add Assamese TTS
   - They already support translation, so TTS may be in their roadmap

2. **Community Contribution**
   - Allow users to record pronunciation
   - Build a community audio database

## Technical Implementation

### Files Updated
- `prototype/src/lib/sarvam.ts:58` - Added `model: 'sarvam-translate:v1'` for translation
- `prototype/src/lib/sarvam.ts:103-150` - Disabled TTS API calls, returns mock audio

### Testing the Fix

After deploying the updated code to Netlify:

1. **Translation should work:**
   - Go to `/demo` page
   - Enter English text → Should translate to Assamese
   - Enter Assamese text → Should translate to English

2. **Audio will be silent:**
   - Click audio icons in lessons → No sound (expected)
   - Check browser console → See warning message

## Next Steps

1. **Deploy the fix** to Netlify (merge PR to main branch)
2. **Test translation feature** thoroughly
3. **Decide on TTS strategy:**
   - Accept limitation temporarily?
   - Research alternative TTS providers?
   - Add pre-recorded audio?
4. **Update UI** to set user expectations about audio

## Comparison: What We Expected vs Reality

| Feature | Expected | Reality |
|---------|----------|---------|
| Translation EN→AS | ✅ Yes | ✅ Yes (with model fix) |
| Translation AS→EN | ✅ Yes | ✅ Yes (with model fix) |
| TTS for Assamese | ✅ Yes (assumed) | ❌ No (not supported) |
| TTS for English | ✅ Yes | ✅ Yes (but not needed) |

## Documentation References

- **Sarvam AI Docs:** https://docs.sarvam.ai/
- **Translation API:** https://docs.sarvam.ai/api-reference-docs/text/translate
- **TTS API:** https://docs.sarvam.ai/api-reference-docs/text-to-speech/convert
- **Supported Languages:** Verified through API error messages

## Questions for You

1. **Do you want to explore alternative TTS providers** that support Assamese?
2. **Should we add a UI message** explaining that audio is not available yet?
3. **Would you like to record native audio** for the key vocabulary in the 5 lessons?
4. **Should I contact Sarvam AI** support to inquire about Assamese TTS roadmap?

---

**Status:** Translation API fixed and working. TTS limitation documented and handled gracefully.

**Date:** 2025-11-12
