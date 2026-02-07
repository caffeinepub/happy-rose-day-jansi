# Specification

## Summary
**Goal:** Add a global Day/Night mood toggle and mood-aware visual refinements, plus two new emotional text moments in the existing 7-page Rose Day microsite.

**Planned changes:**
- Add an always-visible Day/Night Mood Toggle across all 7 pages, positioned opposite the existing global music toggle and kept touch-friendly on mobile without overlapping content or causing hover/jump effects.
- Implement a single global theme state (session-persisted) with Day (default) and Night styling, including smooth crossfade transitions for backgrounds, glassmorphism panels, and text colors while maintaining readability/accessibility.
- Update global background effects to adapt by mood: keep floating hearts in both modes; in Night mode make hearts softer/slower/dimmer and add subtle star-like sparkles/soft glowing particles; keep Day sparkles warm-toned and very subtle; ensure effects are lightweight and never block interactions.
- Add the subtle serif callback line once in the existing flow with a gentle fade-in: “Somewhere in this little garden, Jansi, there’s a piece of my heart.” with mood-harmonized color (rose-toned in Day, soft off-white in Night).
- On Page 7 (Replay/Ending), add the centered closing send-off message just above “Visit My Rose Garden Again” with soft fade-in + slow upward slide and a gentle glow: “If today made you smile even a little,\nthen it was worth making.”

**User-visible outcome:** Visitors can toggle a premium Day/Night mood across the entire experience (with smooth theme/effects changes), see a subtle romantic callback line during the flow, and receive a new animated closing message on the replay/ending page above the replay button.
