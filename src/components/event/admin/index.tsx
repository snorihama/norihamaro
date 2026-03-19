"use client";

import { type FormEvent, useRef, useState } from "react";
import { useWaitTime } from "@/hooks/waitTime";
import { updateStatus } from "@/lib/service/supabase";
import { generateAuthUrl } from "@/lib/service/twitter";

export const Admin = () => {
	const [wait, setWait] = useState<string>("");
	const [soldOut, setSoldOut] = useState(false);
	const [message, setMessage] = useState("");
	const [result, setResult] = useState<string | null>(null);
	const _inputRef = useRef<HTMLInputElement>(null);
	const { wait: tmpWait, error } = useWaitTime();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (wait === "") {
			setResult("待ち時間を入力してください");
			return;
		}
		const waitTime = parseInt(wait, 10);
		setResult("送信中…");

		const error = await updateStatus({
			waitTime,
			soldOut,
			message,
		});

		if (error === null) {
			// const url = await generateAuthUrl();
			// console.log(url);
			//
			// under development....
			// const code = inputRef.current?.value;
			// if (!code) {
			//   setResult("コードがありません");
			//   return;
			// }
			// const res = await postTweet(
			//   `[Test api call] 現在の推定待ち時間は${message}分です🐼`,
			//   code,
			// );
			// switch (res.name) {
			//   case "PostTweetResponse":
			//     console.log(res);
			//     break;
			//   case "Err":
			//     console.error(res);
			//     break;
			//   default:
			//     exhaustiveMatchingGuard(res);
			// }
		}

		setResult(error ? `エラー: ${error.message}` : "保存しました！");
	};

	const _gen = async () => {
		const url = await generateAuthUrl();
		console.log(url);
	};

	return (
		<div className="w-full p-8">
			{/* <input type="text" ref={inputRef} />
      <button onClick={gen}>ABC</button> */}
			<form onSubmit={handleSubmit}>
				<div className="w-full flex flex-col gap-4 rounded-lg bg-gray-100 p-4">
					<div>
						<p>現在の推定待ち時間は{tmpWait ?? "null"}分です</p>
						<p>エラーメッセージ: {error ?? "null"}</p>
					</div>
					<label className="w-full flex gap-4">
						<span className="w-[30%] rounded-lg bg-primary text-beige font-black p-1 text-center">
							{"待ち時間 (分)"}
						</span>
						<input
							type="number"
							value={wait}
							onChange={(e) => {
								setWait(e.target.value);
							}}
							className="border border-primary rounded-lg p-1 text-primary focus:shadow-md focus:outline-none"
						/>
						{"*"}
					</label>

					<label className="w-full flex gap-4">
						<span className="w-[30%] rounded-lg bg-primary text-beige font-black p-1 text-center">
							{"品切れ"}
						</span>
						<input
							type="checkbox"
							checked={soldOut}
							onChange={(e) => setSoldOut(e.target.checked)}
							className="border border-primary rounded-lg p-1 text-primary"
						/>
					</label>

					<label className="w-full flex gap-4">
						<span className="w-[30%] rounded-lg bg-primary text-beige font-black p-1 text-center">
							{"表示メッセージ"}
						</span>
						<input
							type="text"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="border border-primary rounded-lg p-1 text-primary focus:shadow-md focus:outline-none"
						/>
					</label>

					<div className="w-full px-4">
						<div className="w-full flex flex-col gap-2 justify-center items-center border-t border-primary pt-2">
							<button
								type="submit"
								className="w-[30%] rounded-lg bg-white text-primary font-black p-1 text-center"
							>
								送信
							</button>
							{result && <p>{result}</p>}
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
