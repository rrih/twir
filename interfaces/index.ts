export interface Tweet {
	id: number
	text: string
	created_at: Date // 投稿日時
	favorite_count: number // fav 数
	retweet_count: number // RT 数
	in_reply_to_screen_name: string // リプライ先のアカウントのスクリーンネーム
	user: User
}

export interface User {
	id: number
	created_at: Date // アカウント作成日時
	description: string // プロフィール文
	name: string
	location: string
	profile_banner_url: string // プロフィールのバナー画像リンク
	profile_image_url: string // プロフィール画像のリンク
	protected: boolean // 鍵がかかっているか
	screen_name: string
	statuses_count: number // ツイート数
	url: string
}
