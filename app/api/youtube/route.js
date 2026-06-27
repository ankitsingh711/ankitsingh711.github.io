import { NextResponse } from 'next/server';

const CHANNEL_ID = 'UCutwpAxGulC4hCLl3JL2lGg';
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

function decodeXML(str = '') {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'");
}

export async function GET() {
  try {
    const res = await fetch(RSS_URL, {
      next: { revalidate: 3600 },
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });

    if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`);

    const xml = await res.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];

    const videos = entries.slice(0, 9).map(([, entry]) => {
      const videoId = (entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/) || [])[1] || '';
      const title = (entry.match(/<media:title>([^<]+)<\/media:title>/) || [])[1] || '';
      const thumbnail =
        (entry.match(/url="(https:\/\/i[^"]*hqdefault[^"]*)"/) || [])[1] ||
        `https://i4.ytimg.com/vi/${videoId}/hqdefault.jpg`;
      const published = (entry.match(/<published>([^<]+)<\/published>/) || [])[1] || '';

      return {
        id: videoId,
        title: decodeXML(title),
        thumbnail,
        publishedAt: published,
      };
    });

    return NextResponse.json({ videos });
  } catch (err) {
    console.error('YouTube RSS error:', err);
    return NextResponse.json({ error: err.message, videos: [] }, { status: 500 });
  }
}
