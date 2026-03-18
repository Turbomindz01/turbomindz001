# TURBOMINDZ — Testing Protocol & Verification Checklist

**Version:** 1.0  
**Last Updated:** March 18, 2026  
**Status:** Ready for Week 1 implementation

---

## Overview

This document describes the complete testing strategy for Turbomindz across all 12 weeks of development.

**Testing Approach:**
- **Manual testing** — Every day (visual, interaction, responsive)
- **Automated testing** — Weekly (build, lint, Lighthouse, accessibility)
- **Feature-specific testing** — As features are built (forms, animations, real-time, wallet, trading)

---

## Daily Build Verification Checklist

**BEFORE EVERY COMMIT**, verify all of the following:

### Build & Compilation
- [ ] `npm run build` completes with **ZERO errors** and **ZERO warnings**
- [ ] `npm run dev` starts without errors and hot-reload works
- [ ] Total build time < 60 seconds
- [ ] No TypeScript errors in VS Code (@types all correct)
- [ ] No ESLint warnings (strict mode)

### Browser & Console
- [ ] Open in browser (http://localhost:3000)
- [ ] Browser DevTools Console shows **NO errors** (only info/warnings OK)
- [ ] Browser DevTools Network tab shows no failed requests (green only)
- [ ] No 404 errors in Network tab
- [ ] Images load with correct dimensions, no layout shift

### Responsive Breakpoints (Mobile-First)
Test in browser DevTools (Ctrl+Shift+M) at each breakpoint:

**375px (Mobile — iPhone SE, Galaxy A53)**
- [ ] No horizontal scroll
- [ ] Navbar hamburger menu visible, logo visible
- [ ] Text readable (16px+ font on body)
- [ ] Buttons touch-friendly (≥44px tall)
- [ ] Images scale correctly (no cropping)
- [ ] Forms single column
- [ ] Cards stack vertically

**768px (Tablet — iPad, Galaxy Tab A)**
- [ ] Navigation shows 2-column or responsive grid
- [ ] Hero section readable and visually balanced
- [ ] Cards display 2 per row where applicable
- [ ] Padding/margins appropriate (not too large)
- [ ] Images maintain aspect ratio

**1024px (Desktop — MacBook Air, 1024p monitor)**
- [ ] Full navigation menu visible (no hamburger)
- [ ] Grid layouts show 3-4 columns as designed
- [ ] Hero section full width with proper spacing
- [ ] Sidebar (if any) appears beside main content
- [ ] Maximum content width respected (max-w-7xl)

**1440px (Desktop — 1440p, larger monitors)**
- [ ] Layout doesn't stretch excessively
- [ ] max-w-7xl container still applies
- [ ] All elements centered and balanced
- [ ] No orphaned text or broken layouts

### Navigation & Links
- [ ] All navigation links work (go to correct page)
- [ ] Links have visual hover states
- [ ] Active page link is highlighted
- [ ] Back buttons work (browser history)
- [ ] No dead links or 404 pages

### Interactions & Forms
- [ ] Buttons respond to clicks (visual feedback)
- [ ] Form inputs are focusable (tab order)
- [ ] Form fields show placeholder text clearly
- [ ] Required field indicators visible
- [ ] Form submission gives feedback (button disable, loading state, or redirect)

### Accessibility (Keyboard Navigation)
- [ ] Tab key navigates through interactive elements in logical order
- [ ] Shift+Tab goes backward through elements
- [ ] Enter key activates buttons
- [ ] Space key activates buttons (fallback)
- [ ] Escape key closes modals/menus
- [ ] Focus indicators visible (outline) on every interactive element

### Performance
- [ ] Page load time < 3 seconds on LTE
- [ ] No lag when scrolling (smooth 60fps)
- [ ] Animations smooth without stutter (use Performance tab in DevTools)
- [ ] No memory leaks (check Performance tab, heap size stable)

### Images & Media
- [ ] All images load successfully
- [ ] Images don't cause layout shift (Cumulative Layout Shift score low)
- [ ] SVG icons render clearly
- [ ] Responsive images scale correctly at all breakpoints
- [ ] Image alt text present (for accessibility)

### Dark Mode (Default)
- [ ] Background is Deep Teal (#004D5C) or Rich Black (#0A0A0A)
- [ ] Text is Warm White (#FFF8F0) or Light Gray
- [ ] Accent elements are Gold (#C9A227)
- [ ] Contrast meets WCAG AA (check with aXe DevTools)
- [ ] No light backgrounds that break dark mode theme

---

## Weekly Automated Testing

Run **every Friday** (or end of week):

### Build Verification
```bash
cd c:\Users\hugog\Desktop\TMDZ\app
npm run build  # Must pass with 0 errors
npm run lint   # ESLint must pass
```

### Browser Audit Tools (Chrome DevTools)

**Lighthouse Audit** (Ctrl+Shift+I → Lighthouse tab)
- [ ] Performance: ≥ 90
- [ ] Accessibility: ≥ 95
- [ ] Best Practices: ≥ 90
- [ ] SEO: ≥ 90

**Screenshot:** Save Lighthouse report for reference

**aXe DevTools** (add extension to Chrome)
- [ ] Run automated scan
- [ ] 0 critical issues
- [ ] 0-5 serious issues (fix any found)
- [ ] Minor issues documented

**Chrome DevTools Mobile Emulation**
- [ ] Test at iPhone 12 Pro (390px)
- [ ] Test at iPad (820px)
- [ ] Test at Galaxy S21 (360px)

### Code Quality

**TypeScript Strict Mode**
```bash
npm run build  # Strict mode on by default (tsconfig.json)
```
Result: 0 TypeScript errors

**ESLint**
```bash
npm run lint
```
Result: 0 warnings, 0 errors

---

## Feature-Specific Testing

### Form Testing
**Apply to:** Newsletter signup, profile edit, contact form, commission request

Checklist:
- [ ] Empty submission shows validation errors
- [ ] Email field requires valid email format
- [ ] Required fields marked with asterisk (*)
- [ ] Submit button disabled while processing
- [ ] Success message shows after submit
- [ ] Error message shows if submission fails
- [ ] Form clears after successful submit
- [ ] Works on mobile keyboard (no hidden fields under keyboard)

### Animation Testing
**Apply to:** Hero animations, scroll effects, modal transitions, carousel

Checklist:
- [ ] Animation plays on page load
- [ ] Animation smooth at 60fps (use DevTools Performance tab)
- [ ] No frame drops on mobile (check at 375px)
- [ ] Animation respects prefers-reduced-motion setting
- [ ] Animation doesn't block user interaction
- [ ] Carousel arrows work (previous/next)
- [ ] Carousel indicators update correctly

### Carousel Testing
**Apply to:** Featured NFTs, Hero carousel, NFT carousel

Checklist:
- [ ] Previous/next buttons work
- [ ] Indicators (dots) show current slide
- [ ] Auto-advance timer works (if applicable)
- [ ] Clicking indicator jumps to slide
- [ ] Mobile swipe works (if implemented)
- [ ] Carousel responsive (shows correct number of items per breakpoint)
- [ ] Keyboard navigation works (arrow keys)

### Modal/Dialog Testing
**Apply to:** NFT detail modal, profile settings, trade confirmation

Checklist:
- [ ] Modal opens with animation
- [ ] Background dims properly
- [ ] Close button (X) works
- [ ] Escape key closes modal
- [ ] Clicking outside modal closes it (or doesn't, depending on UX)
- [ ] Focus trapped inside modal (can't tab outside)
- [ ] Modal centers on all breakpoints
- [ ] Modal content readable on mobile (scrolls if needed)
- [ ] Proper z-index (modal above other elements)

### Real-Time State Testing
**Apply to:** Wallet connection, user profile sync, marriage system

Checklist:
- [ ] Data updates immediately after action
- [ ] State persists after page refresh
- [ ] State matches database on first load
- [ ] Update notifications show (if applicable)
- [ ] Error states handled gracefully
- [ ] Loading states show while fetching

### Wallet Connection Testing
**Apply to:** thirdweb Connect, Zustand wallet state, profile page

Checklist:
- [ ] Connect button visible and clickable
- [ ] Wallet modal opens (170+ wallets available)
- [ ] MetaMask can connect (confirm in browser)
- [ ] Connected address displays
- [ ] Connected address is copyable (to clipboard)
- [ ] Disconnect button works
- [ ] Wallet address persists on page reload
- [ ] Wrong network shows error message
- [ ] Multiple wallet connections show in UI

### Token Gate Testing
**Apply to:** Gated pages, premium content, gallery preview

Checklist:
- [ ] Gated content shows "You need X NFT" message when user has no token
- [ ] Gated content visible when user has required NFT (mock with local storage)
- [ ] Message includes clear description of required NFT
- [ ] Link to buy/mint NFT in message (if applicable)
- [ ] Gate checks both wallet address AND NFT ownership
- [ ] Error message if wallet not connected
- [ ] No console errors when checking token

### Trading/Contract Testing
**Apply to:** Trade initiation, transaction approval, NFT swap

Checklist:
- [ ] Trade initiation form shows all fields
- [ ] Selected NFT displays with preview
- [ ] CTA button triggers wallet transaction
- [ ] MetaMask/wallet shows transaction approval
- [ ] Transaction details correct (correct NFT, correct recipient)
- [ ] After approval, confirmation shows
- [ ] Failed transaction shows error message
- [ ] Successful trade updates marketplace/inventory
- [ ] Transaction hash visible for verification

### Search & Filter Testing
**Apply to:** Gallery search, marketplace filters, theme filters

Checklist:
- [ ] Search input accepts text
- [ ] Results update on keystroke (if real-time) or on submit
- [ ] No results message shows if nothing found
- [ ] Filter by theme works (updates grid)
- [ ] Filter by character works (updates grid)
- [ ] Multiple filters can combine
- [ ] Clear/reset filters button works
- [ ] Filter state persists on page reload (if applicable)
- [ ] Mobile: Filter UI doesn't block content

---

## Cross-Browser Testing

**Test on 3+ browsers at Week 11 before deployment:**

| Browser | Minimum Version | Test Areas |
|---------|-----------------|-----------|
| Chrome | Latest | All features |
| Firefox | Latest | All features, animations |
| Safari | 14+ | Mobile (iPhone), desktop (macOS) |
| Edge | Latest | Windows desktop |

Checklist for each browser:
- [ ] Page loads without errors
- [ ] Styling correct (colors, fonts, layout)
- [ ] Animations smooth
- [ ] Forms work
- [ ] Modals/dialogs work
- [ ] Navigation works
- [ ] Console clear of errors

---

## Mobile Platform Testing

**Test on 2+ devices at Week 11 before deployment:**

### iOS (iPhone)
- [ ] Safari browser (latest iOS version)
- [ ] App rendering correct (no overlaps, proper spacing)
- [ ] Status bar not overlapping content
- [ ] Safe area respects notch/Dynamic Island
- [ ] Form keyboard doesn't hide inputs
- [ ] Wallet connection works (MetaMask app installed)

### Android
- [ ] Chrome (latest version)
- [ ] App rendering correct
- [ ] System navigation bar doesn't overlap content
- [ ] Form keyboard doesn't hide inputs
- [ ] Wallet connection works (MetaMask app installed)
- [ ] Dark mode respected (system setting)

---

## Performance Testing (Weekly)

### Lighthouse Report (ChromeDevTools)

**Target Scores:**
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 90
- SEO: ≥ 90

**Common Improvements:**
- Optimize images (WebP, compression)
- Minify CSS/JS (handled by Next.js)
- Remove unused CSS
- Defer non-critical CSS
- Lazy-load images beyond fold

### Speed Metrics (DevTools Performance Tab)

**Target Times:**
- **FCP** (First Contentful Paint): < 1.8s
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **TTFB** (Time to First Byte): < 0.6s

### Bundle Size Check

```bash
npm run build
# Check .next/static folder size < 500KB total
```

---

## Accessibility Testing (Weekly)

### Manual Keyboard Navigation
- [ ] Tab through entire page — all interactive elements reachable
- [ ] Shift+Tab goes backward — logical reverse order
- [ ] Focus visible on every element (outline or highlight)
- [ ] Focus order matches visual order (no weird jumps)
- [ ] Enter/Space activate buttons
- [ ] Escape closes modals
- [ ] Skip link to main content (if applicable)

### Screen Reader Testing (NVDA or VoiceOver)
- [ ] Page title announced
- [ ] Headings properly marked (h1, h2, h3)
- [ ] Link text descriptive (not "click here")
- [ ] Form labels associated with inputs
- [ ] Img tags have alt text
- [ ] Icons have aria-label if no text
- [ ] Live regions announce updates

### Color & Contrast (aXe DevTools)
- [ ] All text ≥ 4.5:1 contrast (WCAG AA)
- [ ] Large text (≥ 18pt or ≥ 14pt bold) ≥ 3:1 contrast
- [ ] No color-only indicators (use text + icon)
- [ ] Focus indicators visible (not invisible)

### Automated Scan (aXe DevTools)
```
1. Install aXe DevTools Chrome extension
2. Open page in Chrome
3. Click aXe DevTools icon → Scan page
4. Result should show: 0 critical, 0 serious issues
5. Fix any violations found
```

---

## Bug Triage Template

When you find a bug during testing:

```
**Bug:** [Brief title]
**Severity:** Critical | High | Medium | Low
**Browser/Breakpoint:** [Where it occurs]
**Steps to Reproduce:**
1. [Step 1]
2. [Step 2]
3. [Step 3]
**Expected:** [What should happen]
**Actual:** [What actually happens]
**Screenshot:** [If visual bug]
**Commit to Fix:** [Git commit hash, if fixed]
```

---

## Testing Schedule by Development Phase

### Weeks 1-2 (MP1): Foundation & Layout
- Daily: Responsive at 375px, 768px, 1024px
- Weekly: Lighthouse, aXe DevTools, ESLint
- Focus: Layout, responsive behavior, navigation

### Weeks 3-4 (MP2): Core Pages & Animations
- Daily: All above + animation smoothness
- Weekly: All above + browser compatibility
- Add: Modal/carousel testing, scroll performance

### Weeks 5-6 (MP3): Wallet & Auth
- Daily: All above
- Add: Wallet connection testing, state persistence
- New: Token gate testing

### Weeks 7-8 (MP4): Supabase & Marriage
- Daily: All above
- Add: Real-time sync testing, database verification
- New: Marriage system flow testing

### Weeks 9-10 (MP5): Marketplace & PWA
- Daily: All above
- Add: Trade flow testing, contract testing
- New: PWA install testing, offline testing, push notification testing

### Week 11: QA & Polish
- Comprehensive regression (test entire app end-to-end)
- All browsers (Chrome, Firefox, Safari, Edge)
- All devices (iPhone, iPad, Android phone)
- Full accessibility audit
- Full performance audit
- All forms tested with edge cases

### Week 12: Deployment & Launch
- Production environment testing
- Domain connectivity verification
- SSL certificate verification
- Real blockchain transaction testing (Polygon Mumbai, then mainnet)
- Monitoring setup verification (Sentry, Vercel Analytics)

---

## Test Data & Mocks

### Mock User for Testing
```
Address: 0x742d35Cc6634C0532925a3b844Bc39e7E7bA0b9a (MetaMask test wallet)
Username: testuser
Email: dev@turbomindz.com
NFTs Owned: 5 (mock)
Marriage Count: 2 (mock)
```

### Mock NFT for Testing
```
ID: TM-256
Name: "Awakening"
Theme: Classical Foundations
Character: Cosmo
Image: (use placeholder from /public/images/nft-placeholders/)
Price: 0.5 MATIC (mock)
```

### Test Scenarios (Wallet)
- Wallet not connected → Show "Connect Wallet" button
- Wallet connected, no NFTs → Show "No NFTs" message
- Wallet connected, with NFTs → Show NFT inventory

---

## Deployment Testing (Week 12)

### Pre-Deployment Checklist
- [ ] All features tested locally and pass
- [ ] Build passes: `npm run build` (0 errors)
- [ ] Lint passes: `npm run lint` (0 errors)
- [ ] Environment variables configured (.env.local)
- [ ] Database (Supabase) seeded with test data
- [ ] Wallet (thirdweb) testnet configured
- [ ] Sentry error tracking configured
- [ ] Vercel Analytics enabled
- [ ] Staging preview works on Vercel
- [ ] All pages accessible on staging domain

### Post-Deployment Checklist
- [ ] Live site accessible (turbomindz.com)
- [ ] SSL certificate valid (check in browser)
- [ ] Homepage loads without errors
- [ ] All pages accessible
- [ ] AI no console errors on live site
- [ ] Wallet connection works on live site
- [ ] Database queries working (profile loads)
- [ ] Blockchain interactions working (testnet)
- [ ] Email notifications working
- [ ] n8n workflows active

---

## Logging & Metrics

### What to Monitor Post-Launch
- Error rates (Sentry dashboard)
- Page load times (Vercel Analytics)
- User sessions (Vercel Analytics)
- Transaction success rate
- User feedback (support messages)
- Crash reports
- API response times (if applicable)

---

## Test Summary Template

At the end of each week, document testing:

```
## Week X Testing Summary

### Manual Testing
- Responsive breakpoints: ✅ All pass
- Forms: ✅ 5/5 forms tested, all pass
- Interactions: ✅ All buttons/links work
- Mobile: ✅ iPhone 12 Pro, Pixel 6 tested

### Automated Testing
- Build: ✅ Passes with 0 errors
- Lint: ✅ Passes with 0 warnings
- Lighthouse: Performance 92, Accessibility 96, Best Practices 92, SEO 100
- aXe DevTools: 0 critical, 0 serious issues

### New Features Tested
- [Feature 1]: ✅ Pass
- [Feature 2]: ✅ Pass
- [Feature 3]: ✅ Pass

### Known Issues
- [Issue 1]: Backlog for later
- [Issue 2]: Minor, not blocking

### Next Week Focus
- [Testing area 1]
- [Testing area 2]
```

---

**Testing Protocol Complete.**

For daily use, refer to the "Daily Build Verification Checklist" at the top of this document.  
For weekly check, run the "Weekly Automated Testing" section.  
For feature sign-off, use the "Feature-Specific Testing" section matching your feature.

**Questions?** Reference the DEVELOPMENT_PLAN.md week-by-week section and feature descriptions.
