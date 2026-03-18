# TURBOMINDZ — Image Generator Plugin & Tools Setup Guide
## Using AI Image Generation Inside VS Code
### Version 1.0 | March 17, 2026

---

## OVERVIEW

This guide helps you install image generation tools so you can create placeholder images and NFT scene artwork 
directly from VS Code while developing the Turbomindz app.

### Three Image Generation Approaches:

| Tool | Best For | Cost | Setup Time |
|------|----------|------|-----------|
| **Midjourney** | Aesthetic, artistic, consistent | $10-20/month | 5 minutes |
| **DALL-E 3** | Specific details, iterations | Per-use or ChatGPT+ | 2 minutes |
| **Stable Diffusion** | Local/free, full control | Free | 30 minutes |

**Recommendation for Turbomindz:** Start with **Midjourney** (best for claymation aesthetics) + **DALL-E 3** (fastest iterations).

---

## SETUP OPTION 1: MIDJOURNEY (Recommended for Art Quality)

### Step 1: Join Midjourney
1. Go to https://www.midjourney.com/
2. Click "Sign In" → "Sign Up"
3. Create account with Discord (required)
4. Choose a plan: **Standard Plan ($30/month for 15 hours GPU time)** or **Pro Plan ($120/month unlimited)**
   - For Turbomindz: Standard plan is sufficient
5. Verify payment method

### Step 2: Access Midjourney Discord
1. After signup, you'll be invited to Midjourney Discord server
2. Go to left sidebar → find a "newbies-" channel (newbies-1, newbies-2, etc.)
3. You can now use `/imagine` command to generate images

### Step 3: Using Midjourney from VS Code (via Discord)
While you can't generate directly in VS Code, you can create a workflow:

**Workflow:**
```
1. Open Discord in browser (separate window from VS Code)
2. Keep IMAGE_GENERATION_PROMPTS.md open in VS Code
3. Copy prompt from .md file
4. Paste in Discord: "/imagine [PROMPT]"
5. Wait 1-2 minutes for generation
6. Download finished image
7. Save to project: /public/images/[section]/filename.jpg
8. Reference in component: imageUrl="/images/[section]/filename.jpg"
```

### Step 4: Midjourney Prompt Parameters
Add these to any prompt for better results:

```
--ar 16:9           // Aspect ratio (16:9, 1:1, 9:16, etc.)
--quality 2         // Quality: 0.25, 0.5, 1 (default), or 2
--style raw         // Style: vivid (default), raw
--niji 6            // Anime style (if you need it)
--no [ELEMENT]      // Exclude elements: --no text
```

**Example with parameters:**
```
/imagine A philosophical scene with ancient marble columns and gold light, 
deep teal atmosphere, claymation characters contemplating the universe. 
Renaissance art style. --ar 16:9 --quality 2 --style vivid
```

---

## SETUP OPTION 2: DALL-E 3 (Fastest for Iterations)

### Step 1: ChatGPT Plus Subscription
1. Go to https://chat.openai.com/
2. Click "Upgrade to Plus" (bottom left)
3. Choose ChatGPT Plus: $20/month
4. Verify payment method
5. You now have access to DALL-E 3

### Step 2: Using DALL-E 3 from ChatGPT
1. Open https://chat.openai.com/ in browser
2. Start new conversation
3. Paste your prompt: "Generate this image with DALL-E 3: [PROMPT FROM .md FILE]"
4. ChatGPT will create the image using DALL-E 3
5. Download the image
6. Save to `/public/images/` in your project

### Step 3: Iterating with Feedback
DALL-E 3 is great for quick iterations:

```
User: Generate this image [PROMPT]
ChatGPT: [Generates image]
User: Adjust the lighting to be more golden and add more purple accents
ChatGPT: [Iterates image]
User: Perfect! Download high-resolution version
```

### Advanced: Using DALL-E 3 API
If you want programmatic access, you can use the OpenAI API:

```python
from openai import OpenAI

client = OpenAI(api_key="your-api-key")

response = client.images.generate(
  model="dall-e-3",
  prompt="A philosophical scene with deep teals and golds...",
  size="1024x1024",
  quality="hd",
  n=1,
)

image_url = response.data[0].url
```

---

## SETUP OPTION 3: STABLE DIFFUSION (Local/Free)

### Option 3A: Stable Diffusion Web UI (Easiest Local Setup)

#### Prerequisites
- GPU with 8GB+ VRAM (NVIDIA, AMD, or Mac Metal)
- 10GB disk space
- Python 3.10 or later

#### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
   cd stable-diffusion-webui
   ```

2. **Run the launcher (Windows):**
   ```bash
   .\webui-user.bat
   ```
   
   Or (Mac/Linux):
   ```bash
   bash webui-user.sh
   ```

3. **First run will:**
   - Download the Stable Diffusion model (~4GB)
   - Install dependencies
   - Start local server at `http://localhost:7860`

4. **Using the Web UI:**
   - Go to http://localhost:7860 in your browser
   - Paste prompt in the text field
   - Click "Generate"
   - Download the image when complete

#### Recommended Models for Turbomindz:
```
- DreamShaper (great for artistic pieces)
- RealVisXL (realistic scenes)
- AnythingV3 (anime/stylized)
- PhotoReal (photorealistic)

Download from: huggingface.co/models
```

### Option 3B: ComfyUI (Advanced, More Control)
For users who want node-based composition:
```bash
git clone https://github.com/comfyanonymous/ComfyUI
cd ComfyUI
python main.py
```
Then visit `http://localhost:8188`

---

## INTEGRATED VS CODE SOLUTIONS

### Option A: Continue.dev (Copilot Integration)

Continue.dev is an extension that brings AI pair programming directly into VS Code.

**Installation:**
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Continue"
4. Install "Continue - Codestorm"
5. Restart VS Code
6. Click the "Continue" icon in left sidebar
7. Configure: Connect to OpenAI, Anthropic, or local LLM

**Using for image generation:**
```
In Continue chat:
"Generate an image prompt for a philosophical scene with [DESCRIPTION]"
Continue will suggest prompt, then you paste it into Midjourney/DALL-E
```

### Option B: Inline Image Preview (VS Code Extensions)

**Install these to preview images in VS Code:**

1. **Image Preview**
   - Extension: `kisstkondoros.vscode-gutter-preview`
   - Shows image preview when hovering over file path
   - Great for quick checking generated images

2. **SVG Preview** (if using SVG-based designs)
   - Extension: `jock.svg`
   - Preview inline SVG
   - Edit and see changes live

3. **Color Picker**
   - Extension: `anseki.vscode-color`
   - Pick colors directly in editor
   - Reference #0D3D47 (deep teal) and #D4AF37 (gold) easily

**To install:**
1. Right-click extension name above
2. Or: Extensions panel → Search → Install

---

## OPTION C: Building a Custom VS Code Extension (Advanced)

If you want deeper integration, build a VS Code extension that connects to image generation APIs:

### Basic Extension Structure
```
turbomindz-image-gen-extension/
├── src/
│   └── extension.ts
├── package.json
└── tsconfig.json
```

### Example: Generate on Command
```typescript
// src/extension.ts
import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
  // Command to generate image
  let disposable = vscode.commands.registerCommand(
    'turbomindz-imagegen.generateImage',
    async () => {
      const prompt = await vscode.window.showInputBox({
        prompt: 'Enter image prompt:',
        value: 'A philosophical scene with deep teals and golds...',
      });

      if (!prompt) return;

      // Call DALL-E API
      const response = await axios.post(
        'https://api.openai.com/v1/images/generations',
        {
          prompt: prompt,
          n: 1,
          size: '1024x1024',
          model: 'dall-e-3',
        },
        {
          headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
        }
      );

      vscode.window.showInformationMessage(
        `Image generated! ${response.data.data[0].url}`
      );
    }
  );

  context.subscriptions.push(disposable);
}
```

### To publish your extension:
1. Create at Azure DevOps marketplace
2. Follow: https://code.visualstudio.com/api/working-with-extensions/publishing-extension
3. Share with team via marketplace link

---

## WORKFLOW: RECOMMENDED DAILY PROCESS

### Morning Image Generation Batch (30 minutes)

```
1. Open VS Code with IMAGE_GENERATION_PROMPTS.md
2. Open Midjourney Discord in separate browser window
3. Copy 3-5 prompts from .md file
4. Paste each into Discord: /imagine [PROMPT]
5. While waiting (1-2 min each), start next prompt
6. Download finished images to /public/images/
7. Update component file with new image paths
8. Test images display correctly with npm run dev
9. Commit image generation batch: git commit -m "feat: add 5 new scene images"
```

### Weekly Generation Sprint (2-3 hours, Sunday)

```
Week 1: Generate Hero + Philosophy section images (10 images)
Week 2: Generate Characters + Community images (15 images)
Week 3: Generate Phygical Marketplace images (8 images)
Week 4: Batch generate TM-041 to TM-060 NFT cards (20 images)

Total: ~50 images per month
Organized in: /public/images/hero/, /public/images/philosophy/, etc.
```

---

## COST BREAKDOWN (For Budget Planning)

| Tool | Monthly Cost | Usage | Notes |
|------|-------------|-------|-------|
| **Midjourney** | $30 (Standard) | 15 hours GPU time | Best for art |
| **DALL-E 3** | $20 (ChatGPT+) | Unlimited API usage | Fastest iterations |
| **Stable Diffusion** | $0 | Unlimited (local) | Requires GPU |
| **Total/Month** | **$50** | Sufficient for Turbomindz weekly content | |

---

## TROUBLESHOOTING

### Midjourney Issues

**Problem:** "Invalid command" when typing /imagine
- **Solution:** You must be in a Midjourney Discord channel (newbies-X, general, etc.), not DMs

**Problem:** Out of GPU minutes
- **Solution:** Subscribe to higher plan or wait for monthly reset (always on between 1-2 UTC)

**Problem:** Generated image doesn't match my style
- **Solution:** Add parameter: `--style raw` for more literal interpretation

### DALL-E 3 Issues

**Problem:** Rate limited (too many requests)
- **Solution:** Wait 5 minutes before next request, or upgrade to ChatGPT Plus Pro tier

**Problem:** Prompt rejected (content policy)
- **Solution:** Avoid requests for specific real people; stick to abstract/conceptual scenes

### Stable Diffusion Issues

**Problem:** CUDA out of memory
- **Solution:** Reduce `Batch Size` in WebUI, or enable `Memory efficient attention`

**Problem:** Models not downloading
- **Solution:** Check internet connection; models are 4-7GB each. Manual download from HuggingFace.

---

## QUICK START: GENERATE FIRST IMAGE TODAY

### In 5 minutes:

1. Go to https://www.midjourney.com/ → Sign up → Choose Standard plan
2. Wait for Discord invite
3. Open Discord → find newbies-1 channel
4. Copy this prompt:
   ```
   A mystical philosophical scene with deep teal (#0D3D47) and gold (#D4AF37) colors. 
   Claymation characters in contemplation. Renaissance architecture with digital elements. 
   Ethereal lighting. High quality digital art. --ar 16:9 --quality 2
   ```
5. Type: `/imagine` [paste prompt above]
6. Wait 1-2 minutes for generation
7. Right-click → Download image
8. Save to: `c:\Users\hugog\Desktop\TMDZ\public\images\hero\hero-bg-v1.jpg`
9. Done! Your first Turbomindz image is generated.

---

## NEXT STEPS

1. ✅ Pick your preferred tool (recommend: Midjourney + DALL-E 3)
2. ✅ Set up account and subscription (spend 10 minutes)
3. ✅ Generate first batch of 5-10 images (spend 30 minutes)
4. ✅ Save images to `/public/images/` organized by section
5. ✅ Update component files with image paths
6. ✅ Test `npm run dev` and see images display
7. ✅ Schedule weekly image generation sprints (Sunday 2-3 hours)

---

## REFERENCE

**IMAGE_GENERATION_PROMPTS.md** contains specific, tested prompts for every section of Turbomindz.
Use it as your primary source for generating consistent, on-brand artwork.

**Each prompt includes:**
- Exact visual description
- Color codes (#0D3D47, #D4AF37, etc.)
- Recommended aspect ratio (16:9, 1:1, etc.)
- Art style direction
- Resolution specifications

Copy any prompt directly from IMAGE_GENERATION_PROMPTS.md and paste into Midjourney/DALL-E-3.

---

## FINAL TIPS

**For Consistency:**
- Save successful prompts and regenerate with minor variations
- Test with multiple tools to find your favorite
- Keep a folder of "reference images" showing your preferred style
- Screenshot good results as examples for refinement

**For Efficiency:**
- Batch generate similar images at once (e.g., all 4 character portraits in one session)
- Run Midjourney on Sunday (pre-produce week's images)
- Use DALL-E 3 for quick iterations (Wednesday/Thursday fixes)
- Stable Diffusion for late-night local generation (when GPU available)

**For Quality:**
- Always include specific color codes in prompts
- Specify artist style (Renaissance, digital art, claymation CGI)
- Use aspect ratio parameters (--ar 16:9)
- Request "high quality" or "detailed" when important

---

You're now ready to generate professional-grade images for Turbomindz directly from your development workflow.

Questions? Refer back to IMAGE_GENERATION_PROMPTS.md or the COPILOT_INSTRUCTIONS.md for guidance.

Happy creating! 🎨✨

