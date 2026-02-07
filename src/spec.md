# Specification

## Summary
**Goal:** Fix global background music by switching the runtime audio source from `cani.mp3` to the provided `cani.mp4`, ensuring user-initiated playback works from both Page 1 and the global play/pause control.

**Planned changes:**
- Update the global audio implementation to load `/assets/cani.mp4` and remove any runtime references to `/assets/cani.mp3`.
- Ensure the Page 1 “Let the roses sing for us 🎶” button starts audible playback on desktop Chrome/Edge and remains user-initiated (no autoplay).
- Ensure the persistent global play/pause toggle correctly starts/pauses audible playback, reflects the correct visual state, and does not restart audio during page navigation once started.
- Replace any documented/declared/static-asset-list references to `cani.mp3` with `cani.mp4` in user- or developer-facing repo text.

**User-visible outcome:** On desktop Chrome/Edge, clicking the Page 1 music start button or the global play/pause toggle produces audible music using `cani.mp4`, and playback persists across page navigation until the user pauses it.
