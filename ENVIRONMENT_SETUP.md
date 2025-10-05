# Environment Setup for Storyblok

To get your application working with Storyblok, you need to set up your API keys.

## 1. Create a `.env` file in the root directory

Create a `.env` file with the following content:

```bash
# Storyblok API Keys
STORYBLOK_API_KEY=your-published-token-here
STORYBLOK_PREVIEW_API_KEY=your-preview-token-here
```

## 2. Get your Storyblok tokens

1. Go to your Storyblok space
2. Navigate to Settings > Access Tokens
3. Copy your:
   - **Public Token** (for published content) → use as `STORYBLOK_API_KEY`
   - **Preview Token** (for draft content) → use as `STORYBLOK_PREVIEW_API_KEY`

## 3. Restart your development server

After creating the `.env` file, restart your development server:

```bash
npm run dev
```

## 4. Verify the setup

Your application should now load without the JSON parsing error. The Storyblok integration will work with your actual content once the tokens are properly configured.
