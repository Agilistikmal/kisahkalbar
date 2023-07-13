import { env } from '$env/dynamic/private';
import { TwitterApi } from 'twitter-api-v2';

export const client: TwitterApi = new TwitterApi({
	appKey: env.TWITTER_API_KEY,
	appSecret: env.TWITTER_API_KEY_SECRET,
	accessToken: env.TWITTER_ACCESS_TOKEN,
	accessSecret: env.TWITTER_ACCESS_TOKEN_SECRET
});
