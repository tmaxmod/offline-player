import http.server
import socketserver

class CORSRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        http.server.SimpleHTTPRequestHandler.end_headers(self)

    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.end_headers()

port = 8080
socketserver.TCPServer.allow_reuse_address = True

with socketserver.TCPServer(("", port), CORSRequestHandler) as httpd:
    print(f"Serving on port {port} with CORS enabled...")
    httpd.serve_forever()
