"use server";

import { auth, Client } from "twitter-api-sdk";

const _twitterApiToken = process.env.TWITTER_API_TOKEN;
const twitterApiAuthCode = process.env.TWITTER_API_AUTH_CODE;

type PostTweetResponse = {
	name: "PostTweetResponse";
	data: unknown;
};

type Err = {
	name: "Err";
	error: unknown;
};

const authClient = new auth.OAuth2User({
	client_id: "TFNZRVNvQXJlcFRnRDdOZ2tTUDA6MTpjaQ",
	client_secret: "SrOlicTODF266aziV1mQKSsBJPrO3gWJHlsCSnI9w5MiC3KLNH",
	callback: "http://127.0.0.1",
	scopes: ["tweet.read", "users.read", "follows.read", "offline.access"], // , "tweet.write"],
});

const client = new Client(authClient);

export const generateAuthUrl = async (): Promise<string> => {
	const url = authClient.generateAuthURL({
		code_challenge: "challenge",
		code_challenge_method: "plain",
		state: "state",
	});
	return new Promise((resolve) => {
		resolve(url);
	});
};

const getAccessToken = async (_code: string): Promise<string | undefined> => {
	// console.log(twitterApiAuthCode);
	try {
		// https://github.com/xdevplatform/twitter-api-typescript-sdk/issues/25#issuecomment-1272391910
		authClient.generateAuthURL({
			state: "state",
			code_challenge_method: "plain",
			code_challenge: "challenge",
		});
		const token = await authClient.requestAccessToken(twitterApiAuthCode);
		console.log(token);
	} catch (err) {
		console.error(err);
	}
	return undefined;
};

const _postTweet = async (
	text: string,
	code: string,
): Promise<PostTweetResponse | Err> => {
	try {
		const _token = await getAccessToken(code);
		// const client = new Client(authClient);
		const res = await client.tweets.createTweet(
			{
				text,
				reply_settings: "mentionedUsers", // disables replies unless mentioned
			},
			{
				headers: {},
			},
		);

		return { name: "PostTweetResponse", data: res };
	} catch (error) {
		console.error("Error posting tweet:", error);
		return { name: "Err", error };
	}
};
