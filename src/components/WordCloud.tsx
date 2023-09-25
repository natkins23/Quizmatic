'use client'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import React from 'react'
import D3WordCloud from 'react-d3-cloud'

type Props = {
    formattedTopics: { text: string; value: number }[]
}
const formattedTopics = [
    { text: 'dogs', value: 10 },
    { text: 'cats', value: 3 },
    { text: 'birds', value: 5 },
    { text: 'mexico', value: 20 },
    { text: 'canada', value: 1 },
    { text: 'biology', value: 1 },
]

const fontSizeMapper = (word: { value: number }) =>
    Math.log2(word.value) * 5 + 16

const WordCloud = (props: Props) => {
    const theme = useTheme()
    const router = useRouter()
    return (
        <>
            <D3WordCloud
                data={formattedTopics}
                height={550}
                font="Times"
                fontSize={fontSizeMapper}
                rotate={0}
                padding={10}
                fill={theme.theme === 'dark' ? 'white' : 'black'}
                onWordClick={(e, d) => {
                    router.push('/quiz?topic=' + d.text)
                }}
            />
        </>
    )
}

export default WordCloud
