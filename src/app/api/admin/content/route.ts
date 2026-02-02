import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { INITIAL_SITE_CONTENT } from '@/config/site-content';

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'site-content.json');

export async function GET() {
    try {
        const fileContent = await fs.readFile(DATA_FILE_PATH, 'utf-8');
        const data = JSON.parse(fileContent);
        return NextResponse.json(data);
    } catch (error) {
        // If file doesn't exist, return initial content
        return NextResponse.json(INITIAL_SITE_CONTENT);
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        // Ensure directory exists
        const dir = path.dirname(DATA_FILE_PATH);
        await fs.mkdir(dir, { recursive: true });

        await fs.writeFile(DATA_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Failed to save content:", error);
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}
