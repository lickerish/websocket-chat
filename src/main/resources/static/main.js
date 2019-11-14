var socketPath = '/chat';
var stomp = null;

function connect() {
    var socket = new SockJS(socketPath);
    stomp = Stomp.over(socket);
    stomp.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stomp.subscribe('/topic/invitation', function (message) {
            message(message);
        });
        stomp.send("/app/hello", {}, JSON.stringify({
            'name': 'Chat System',
            'content': 'username joined to the chat'
        }));
    })
}
function message(message) {
    messageContent = JSON.parse(message.body).content;
    messageName = JSON.parse(message.body).name;
    messageTime = JSON.parse(message.body).time;

    $("#messages").append("<tr>" +
        "<td>" + messageName + "</td>" +
        "<td>" + messageContent + "</td>" +
        "<td>" + messageTime + "</td>" +
        "</tr>");
}

function disconnect() {
    if (stomp) {
        stomp.disconnect();
    }
    console.log('Disconnected');
}

function sendMessage() {
    var messageContent = $('#text-input').val().trim();
    stomp.send("/app/hello", {}, JSON.stringify({'content': messageContent, 'name': 'username'}));
    $('#text-input').val('');
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $("#connect").click(function () {
        connect();
    });

    $("#disconnect").click(function () {
        disconnect();
    });

    $("#sendMessage").click(function () {
        sendMessage()
    });
});
