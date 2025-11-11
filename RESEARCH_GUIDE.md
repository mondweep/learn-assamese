# Research-Swarm Usage Guide for Learn Assamese Project

This guide explains how to use research-swarm to conduct ongoing research for the Assamese language learning app project.

## Quick Start

research-swarm is already installed in this project. To use it, you need to set up API keys.

## Setup

1. **Copy the environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Add your API keys to `.env`:**
   ```bash
   # At minimum, add one of these:
   ANTHROPIC_API_KEY=sk-ant-your-key-here
   # OR
   GOOGLE_GEMINI_API_KEY=your-gemini-key-here
   # OR
   OPENROUTER_API_KEY=your-openrouter-key-here
   ```

3. **Initialize the database:**
   ```bash
   npx research-swarm init
   ```

## Research Commands for This Project

### 1. Market Research

**Analyze competitive landscape:**
```bash
npx research-swarm goal-research "Comprehensive analysis of Indian language learning apps market 2025" \
  --depth 7 \
  --time 180 \
  --provider anthropic
```

**Study diaspora community needs:**
```bash
npx research-swarm goal-research "Assamese diaspora community cultural preservation challenges and solutions" \
  --depth 6 \
  --time 120
```

**Monetization strategies:**
```bash
npx research-swarm goal-research "Successful monetization models for niche language learning apps" \
  --depth 5 \
  --time 90
```

### 2. Technical Research

**AI/ML capabilities for Assamese:**
```bash
npx research-swarm goal-research "Current state of NLP and speech recognition for Assamese language" \
  --depth 8 \
  --time 240 \
  --provider gemini  # Use Gemini for real-time web search
```

**Sarvam.ai deep dive:**
```bash
npx research-swarm goal-research "Sarvam.ai API capabilities, limitations, and best practices for Indian language apps" \
  --depth 7 \
  --time 180
```

**Mobile architecture decisions:**
```bash
npx research-swarm goal-research "Native vs Flutter vs React Native for language learning apps in 2025" \
  --depth 6 \
  --time 120
```

### 3. Content & Pedagogy Research

**Language learning best practices:**
```bash
npx research-swarm goal-research "Evidence-based pedagogy for adult language learners in diaspora communities" \
  --depth 7 \
  --time 180
```

**Gamification strategies:**
```bash
npx research-swarm goal-research "Effective gamification techniques for sustained engagement in language learning" \
  --depth 6 \
  --time 120
```

**Cultural content integration:**
```bash
npx research-swarm goal-research "Integrating cultural education with language learning for heritage language acquisition" \
  --depth 6 \
  --time 120
```

### 4. User Acquisition & Growth

**Marketing strategies:**
```bash
npx research-swarm goal-research "Growth hacking strategies for diaspora community mobile apps" \
  --depth 6 \
  --time 120
```

**Community building:**
```bash
npx research-swarm goal-research "Building engaged user communities in language learning platforms" \
  --depth 5 \
  --time 90
```

## Advanced Usage

### Multi-Provider Research

Use different AI providers for different types of research:

**Real-time information (use Gemini with Google Search):**
```bash
export GOOGLE_GEMINI_API_KEY="your-key"
npx research-swarm goal-research "Latest Sarvam.ai product updates and features 2025" \
  --provider gemini \
  --depth 5
```

**Deep analysis (use Claude):**
```bash
export ANTHROPIC_API_KEY="your-key"
npx research-swarm goal-research "Technical architecture for scalable language learning platforms" \
  --provider anthropic \
  --depth 8
```

**Cost-effective research (use OpenRouter):**
```bash
export OPENROUTER_API_KEY="your-key"
npx research-swarm goal-research "Assamese script rendering best practices" \
  --provider openrouter \
  --model "anthropic/claude-3.5-sonnet"
```

### Swarm Size Control

**Quick research (3 agents):**
```bash
npx research-swarm research researcher "Quick question about Assamese Unicode support" \
  --depth 3 \
  --swarm-size 3
```

**Complex analysis (7 agents):**
```bash
npx research-swarm research researcher "Comprehensive speech recognition accuracy analysis for Assamese" \
  --depth 8 \
  --swarm-size 7
```

### Job Management

**List all research jobs:**
```bash
npx research-swarm list
```

**View specific job:**
```bash
npx research-swarm view <job-id>
```

**View recent completed jobs:**
```bash
npx research-swarm list --status completed --limit 5
```

## Research Schedule Recommendations

### Weekly Research Tasks

**Week 1-2 (Market Validation):**
- Diaspora community needs analysis
- Competitive landscape review
- User persona development research

**Week 3-4 (Technical Foundation):**
- Sarvam.ai API testing and documentation review
- Technology stack comparison
- Architecture pattern research

**Week 5-8 (Content Development):**
- Pedagogy research
- Cultural content frameworks
- Exercise design patterns

**Week 9-12 (Go-to-Market):**
- Marketing strategy research
- Community building tactics
- Partnership opportunities

### Ongoing Monthly Research

**First Monday of each month:**
```bash
# Market updates
npx research-swarm goal-research "Latest developments in AI language learning and Indian language tech" \
  --provider gemini --depth 5
```

**When facing technical decisions:**
```bash
# Quick technical research
npx research-swarm research researcher "Your specific technical question" \
  --depth 4 --swarm-size 3
```

**Quarterly deep dives:**
```bash
# Comprehensive competitive analysis
npx research-swarm goal-research "Full competitive landscape analysis for Assamese language learning" \
  --depth 8 --time 240
```

## Integration with Development

### Pre-Feature Research

Before implementing major features:

```bash
# Example: Before implementing speech recognition
npx research-swarm goal-research "Best practices for implementing speech recognition in language learning apps using Sarvam.ai" \
  --depth 7 --time 180

# Example: Before building gamification
npx research-swarm goal-research "Duolingo gamification mechanics analysis and alternatives for niche language apps" \
  --depth 6 --time 120
```

### Problem-Solving Research

When encountering challenges:

```bash
# Example: Low user retention
npx research-swarm goal-research "Strategies to improve user retention in language learning apps with small user bases" \
  --depth 7 --time 180

# Example: Pronunciation accuracy issues
npx research-swarm goal-research "Improving speech recognition accuracy for low-resource languages like Assamese" \
  --depth 8 --time 240
```

## Cost Management

### Estimated Costs per Research Task

**Quick research (3 agents, depth 3):**
- ~10,000 tokens
- Cost: ~$0.50 (Anthropic Claude)

**Medium research (5 agents, depth 5):**
- ~30,000 tokens
- Cost: ~$1.50 (Anthropic Claude)

**Deep research (7 agents, depth 8):**
- ~60,000 tokens
- Cost: ~$3.00 (Anthropic Claude)

**Budget recommendation:** $50-100/month for active research phase

### Cost-Saving Tips

1. **Use appropriate depth:**
   - Simple questions: depth 3-4
   - Complex analysis: depth 7-8

2. **Use OpenRouter for lower costs:**
   ```bash
   --provider openrouter --model "anthropic/claude-3.5-sonnet"
   ```

3. **Single-agent mode for simple queries:**
   ```bash
   --single-agent
   ```

4. **Batch related questions:**
   - Research multiple related topics in one comprehensive query

## Storing Research Results

All research results are stored in:
```
./data/research-jobs.db
```

**Export research for documentation:**
```bash
# View and copy research results
npx research-swarm view <job-id>

# Save to file manually or create export script
```

**Recommended: Create a research archive:**
```bash
mkdir -p docs/research
# Copy important research findings to docs/research/
```

## Tips for Effective Research

1. **Be specific in your queries:**
   - ✅ Good: "Speech recognition accuracy benchmarks for Assamese language using Sarvam.ai vs Google Cloud"
   - ❌ Bad: "Speech recognition stuff"

2. **Use appropriate time budgets:**
   - Quick questions: 30-60 minutes
   - Medium research: 90-180 minutes
   - Deep analysis: 240-360 minutes

3. **Leverage multi-perspective analysis:**
   - The swarm architecture provides different viewpoints (Explorer, Analyst, Verifier, etc.)
   - Review all perspectives for comprehensive understanding

4. **Verify citations:**
   - Always check the sources provided
   - Use `--anti-hallucination high` for critical research

5. **Iterate on findings:**
   - Use research results to inform follow-up questions
   - Build knowledge progressively

## Next Steps

1. Set up your API key (choose one provider to start)
2. Run your first research query:
   ```bash
   npx research-swarm goal-research "What are the key success factors for language learning apps targeting diaspora communities?" --depth 5
   ```
3. Review the results and identify actionable insights
4. Schedule weekly research tasks aligned with your development roadmap

## Support & Resources

- **research-swarm docs:** https://github.com/ruvnet/agentic-flow/tree/main/examples/research-swarm
- **Sarvam.ai docs:** https://docs.sarvam.ai/
- **Project feasibility report:** `FEASIBILITY_REPORT.md`

---

**Remember:** Research-swarm is a tool to accelerate your learning and decision-making. Use it strategically to validate assumptions, explore options, and stay informed about the rapidly evolving AI and language learning landscape.
