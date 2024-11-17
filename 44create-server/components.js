var other = `
        <html>
        <head>
            <style>
                body {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    margin: 0;
                    background-color: #f2f2f2;
                    font-family: Arial, sans-serif;
                }
                .logo {
                    font-size: 50px;
                    font-weight: bold;
                    color: #4285f4;
                    margin-bottom: 20px;
                }
                .search-bar {
                    width: 500px;
                    max-width: 90%;
                    display: flex;
                    align-items: center;
                }
                .search-bar input[type="text"] {
                    width: 100%;
                    padding: 10px;
                    font-size: 16px;
                    border: 1px solid #d9d9d9;
                    border-radius: 24px;
                    outline: none;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }
                .buttons {
                    margin-top: 20px;
                }
                .buttons button {
                    padding: 10px 20px;
                    margin: 5px;
                    font-size: 14px;
                    color: #555;
                    background-color: #f8f9fa;
                    border: 1px solid #d9d9d9;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .buttons button:hover {
                    background-color: #e8e8e8;
                }
            </style>
        </head>
        <body>
            <div class="logo">
                <span style="color: #4285f4;">G</span>
                <span style="color: #ea4335;">o</span>
                <span style="color: #fbbc05;">o</span>
                <span style="color: #4285f4;">g</span>
                <span style="color: #34a853;">l</span>
                <span style="color: #ea4335;">e</span>
            </div>

            <div class="search-bar">
                <input type="text" placeholder="Search Google or type a URL" />
            </div>

            <div class="buttons">
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
        </body>
        </html>
    `


module.exports = other;