import Image from "next/image";
import { Inter } from "next/font/google";
import Post from "@/components/Post";

const inter = Inter({ subsets: ["latin"] });

const intervals = [
    {
        id: "1m",
        name: "Every Minute",
        cron: "* * * * *",
    },
    {
        id: "10m",
        name: "Every 10 mins",
        cron: "*/10 * * * *",
    },
    {
        id: "1h",
        name: "Every Hour",
        cron: "0 * * * *",
    },
    {
        id: "12h",
        name: "Every 12 hours",
        cron: "0 */12 * * *",
    },
    {
        id: "1d",
        name: "Every Day",
        cron: "0 0 * * *",
    },
    {
        id: "1w",
        name: "Every Week",
        cron: "0 0 * * 0",
    },
    {
        id: "1mo",
        name: "Every Month",
        cron: "0 0 1 * *",
    },
];
export default function Home() {
    return (
        <main className={inter.className}>
            <section>
                {intervals.map((interval) => (
                    <article key={interval.id}>
                        <h2>{interval.name}</h2>
                        <pre>
                            <code>
                                {interval.cron}
                            </code>
                        </pre>
                        <Post interval={interval.id} />
                    </article>
                ))}
            </section>
        </main>
    );
}
