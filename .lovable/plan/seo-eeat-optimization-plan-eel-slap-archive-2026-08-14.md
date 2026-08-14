# SEO & EEAT Optimization Plan - Eel Slap Archive

This plan aims to improve the site's visibility, authority, and ranking potential by targeting high-volume keywords identified through Semrush and enhancing EEAT (Experience, Expertise, Authoritativeness, and Trustworthiness) signals.

## User Review Required

> [!IMPORTANT]
> This plan focuses on content optimization and semantic improvements. No visual changes will be made to the existing high-performance "Eel Slap" engine.

- **Keyword Strategy**: Transition from generic terms to high-volume variations like "eel slap game", "slapping eel", and "the slap website".
- **Semantic Coverage**: Address specific user queries identified in research, such as "is eelslap safe", "who is the guy in eel slap", and "eel slap original website".
- **EEAT Enhancements**: Strengthen organizational authority by explicitly defining our role as a digital preservation archive for 2010s web culture.

## Technical Details

### 1. SEO Keyword Optimization
- Update Page Titles and Meta Descriptions across all routes to include primary and secondary keywords.
- Refactor the FAQ section in `src/lib/site.ts` to use exact-match question phrasing (e.g., "Is Eel Slap safe to play?").
- Inject secondary keywords ("fish slap", "slapping with a fish", "the slap site") into page copy across `index.tsx`, `about.tsx`, and `history.tsx`.

### 2. Semantic & EEAT Improvements
- **About Page**: Add a dedicated section on "Digital Preservation" to establish our intent as an archive, not a clone.
- **FAQ Page**: Add detailed answers for safety, the "fish name", and original site ownership.
- **Structured Data**: Ensure JSON-LD `Organization` and `WebSite` schema in `__root.tsx` includes `knowsAbout` and `description` fields that emphasize our topical authority on internet meme history.

### 3. Competitor-Specific Targeting
- Implement a "Mirror vs. Archive" section in `history.tsx` to directly address why this site is the definitive resource compared to legacy mirrors (addressing the "original website" search intent).
