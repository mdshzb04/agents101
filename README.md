
## Setup Instructions

This repo requires **Node.js version 20+** or **bun v1.0.20**.

The `main` branch contains the final application. To code along with the workshop, checkout the `step/1` branch. You will also need an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys).

```bash
git clone https://github.com/Hendrixer/agent-from-scratch.git
cd agent-from-scratch
git checkout step/1
npm install # or bun install
```

To run the project:

```bash
npm start
# or
bun run index.ts
```

## OpenAI API Key

Create an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys) and save it in a `.env` file:

```
OPENAI_API_KEY='YOUR_API_KEY'
```

OpenAI requires you to add a minimum of $5 USD credit to your account. Go to the [billing page](https://platform.openai.com/settings/organization/billing/overview) and add credits.

![image](https://github.com/user-attachments/assets/6de27e21-8345-48a7-adf9-5dfee3e8e1c9)

> [!NOTE]  
> It can take up to 20 minutes for the credits to be available via the API. So if you get an `insufficient_quota` error, try again in a few minutes.