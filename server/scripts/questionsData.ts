export const data = [{
    content: [{
        text: 'Given the HTML below',
        code: `<ul class="shopping-list" id="awesome">
    <li><span>Milk</span></li>
    <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
</ul>`
    }, {
        text: 'What is the color of the text Sausage ?',
        code: `ul#awesome #must-buy {
    color: red;
}
.favorite span {
    color: blue!important;
}`
    }],
    answer: {
        type: 'single',
        values: [1]
    },
    responses: [
        'Red',
        'Blue',
        'Neither'
    ]
}, {
    content: [{
        text: 'What does CSS stand for?'
    }],
    answer: {
        type: 'single',
        values: [2]
    },
    responses: [
        'Colorful Style Sheets',
        'Creative Style Sheets',
        'Cascading Style Sheets',
        'Computer Style Sheets'
    ]
}, {
    content: [{
        text: 'What is the correct HTML for referring to an external style sheet?',
    }],
    answer: {
        type: 'single',
        values: [0]
    },
    responses: [
        '<link rel="stylesheet" type="text/css" href="mystyle.css">',
        '<stylesheet>mystyle.css</stylesheet>',
        '<style src="mystyle.css">'
    ]
}, {
    content: [{
        text: 'Where in an HTML document is the correct place to refer to an external style sheet?'
    }],
    answer: {
        type: 'single',
        values: [2]
    },
    responses: [
        'In the <body> section',
        'At the end of the document',
        'In the <head> section'
    ]
},{
    content: [{
        text: 'What is wrong with the following html code?',
        code: `<html>
<head>
<title>
</title>
</head>
<body>
</html>`
    }],
    answer: {
        type: 'multiple',
        values: [2]
    },
    responses: [
        'Nothing is wrong with the HTML code',
        'Missing the opening body tag',
        'Missing the closing body tag'
    ]
}, {
    content: [{
        text: 'Who is making the Web standards?'
    }],
    answer: {
        type: 'single',
        values: [2]
    },
    responses: [
        'Mozilla',
        'Google',
        'The World Wide Web Consortium',
        'Microsoft'
    ]
}, {
    content: [{
        text: 'Choose the correct HTML element for the largest heading:'
    }],
    answer: {
        type: 'single',
        values: [2]
    },
    responses: [
        '<head>',
        '<heading>',
        '<h1>',
        '<h6>'
    ]
}, {
    content: [{
        text: 'Choose the correct HTML element to define emphasized text'
    }],
    answer: {
        type: 'single',
        values: [1]
    },
    responses: [
        '<em>',
        '<i>',
        '<italic>'
    ]
}, {
    content: [{
        text: ' What is the correct HTML for creating a hyperlink?',
        code: `<!-- a) --> <a url="http://www.w3schools.com">W3Schools.com</a>
<!-- b) --> <a>http://www.w3schools.com</a>
<!-- c) --> <a name="http://www.w3schools.com">W3Schools.com</a>
<!-- d) --> <a href="http://www.w3schools.com">W3Schools</a>`
    }],
    answer: {
        type: 'single',
        values: [3]
    },
    responses: [
        'a',
        'b',
        'c',
        'd'
    ]
}, {
    content: [{
        text: 'Which character is used to indicate an end tag?'
    }],
    answer: {
        type: 'single',
        values: [2]
    },
    responses: [
        '^',
        '<',
        '/',
        '*'
    ],
}, {
    content: [{
        text: 'How can you open a link in a new tab/browser window?'
    }],
    answer: {
        type: 'single',
        values: [2]
    },
    responses: [
        '<a href="url" target="new">',
        '<a href="url" new>',
        '<a href="url" target="_blank">'
    ]
}, {
    content: [{
        text: 'Which of these elements are all <table> elements?'
    }],
    answer: {
        type: 'single',
        values: [0]
    },
    responses: [
        '<table><tr><td>',
        '<thead><body><tr>',
        '<table><tr><tt>',
        '<table><head><tfoot>'
    ]
}, {
    content: [{
        text: 'Inline elements are normally displayed without starting a new line.'
    }],
    answer: {
        type: 'single',
        values: [0]
    },
    responses: [
        'True',
        'False'
    ]
}, {
    content: [{
        text: 'How can you make a numbered list?'
    }],
    answer: {
        type: 'single',
        values: [1]
    },
    responses: [
        '<list>',
        '<ol>',
        '<dl>',
        '<ul>'
    ]
}];
