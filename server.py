#!/usr/bin/env python3
"""Local dev server with correct MIME types for audio files."""
import http.server, mimetypes, sys

mimetypes.add_type("audio/mp4",   ".m4a")
mimetypes.add_type("audio/mpeg",  ".mp3")
mimetypes.add_type("audio/ogg",   ".ogg")
mimetypes.add_type("audio/webm",  ".webm")

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
handler = http.server.SimpleHTTPRequestHandler
print(f"Serving at http://localhost:{port}")
http.server.HTTPServer(("", port), handler).serve_forever()
