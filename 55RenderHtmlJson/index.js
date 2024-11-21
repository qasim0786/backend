const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home Page</title>
            <style>
                body {
                    margin: 0;
                    font-family: Arial, sans-serif;
                    background: linear-gradient(135deg, #74ebd5, #acb6e5);
                    color: #333;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    text-align: center;
                }
                .container {
                    background: white;
                    padding: 30px;
                    border-radius: 15px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    max-width: 500px;
                    width: 100%;
                }
                h1 {
                    color: #6a1b9a;
                }
                p {
                    font-size: 1.2em;
                    margin: 15px 0;
                }
                a {
                    text-decoration: none;
                    background: #6a1b9a;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 5px;
                    display: inline-block;
                    margin-top: 20px;
                    transition: background 0.3s ease;
                }
                a:hover {
                    background: #4a148c;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to Our Home Page!</h1>
                <p>Explore our website and discover amazing features.</p>
                <a href="/about">Learn More</a>
            </div>
        </body>
        </html>
    `);
});



app.get('/about', (req,res)=>{

    const student = {
        id: 101,
        name: "John Doe",
        age: 20,
        gender: "Male",
        address: {
            street: "123 Main St",
            city: "Springfield",
            state: "IL",
            postalCode: "62704"
        },
        courses: [
            {
                courseName: "Mathematics",
                courseCode: "MATH101",
                grade: "A"
            },
            {
                courseName: "Physics",
                courseCode: "PHY102",
                grade: "B+"
            },
            {
                courseName: "Computer Science",
                courseCode: "CS103",
                grade: "A-"
            }
        ],
        isActive: true,
        enrolledDate: "2024-08-01"
    };

    res.send(JSON.stringify(student));
});

app.get('/help', (req,res)=>{

   res.send('<h1> Welcome to my site help page to goto home click below</h1> <a href = "/">Goto about Page</>')
});

app.listen(7000);