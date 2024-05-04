'use client'

import styles from "./page.module.css";

import {createEditor, ExportData} from "@postnitro/embed";
import {useState} from "react";


export default function Home() {

    const editor = createEditor({
        apiKey: 'pn-narged069gksaa6uhee4h6zs',
        defaultHeadshot: {
            name: 'Custom Brand',
            logo: 'https://logo.clearbit.com/metacareers.com',
            handle: 'www.custombrand.com',
        },
    });

    const handleOpenEditor = () => {
        editor?.createDesign((data: ExportData) => {

            // on export
            console.log("data", data);
        });


        // TODO: replace with your design id
        // editor?.editDesign('feu4xoi5jlpqxdaflecmr286', (data: ExportData) => {
        //
        //     // on export
        //     console.log("data", data);
        // });
    }

    return (
        <main className={styles.main}>

            <div className={styles.center} style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <button className={styles.button}
                        onClick={handleOpenEditor}
                >
                    Open Editor
                </button>
            </div>

            <div className={styles.grid}>
                <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Learn <span>-&gt;</span>
                    </h2>
                    <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
                </a>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Templates <span>-&gt;</span>
                    </h2>
                    <p>Explore starter templates for Next.js.</p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p>
                        Instantly deploy your Next.js site to a shareable URL with Vercel.
                    </p>
                </a>
            </div>
        </main>
    );
}
