var socketPath = '/chat';
var stomp = null;

function connect() {
    var username = document.querySelector('#name').value.trim();
    if (username) {
        $('#username-page').addClass('hidden');
        $('#chat-page').removeClass('hidden');

        var socket = new SockJS(socketPath);
        stomp = Stomp.over(socket);
        stomp.connect({}, function (frame) {
            resetProperties(true);
            console.log('Connected: ' + frame);
            stomp.subscribe('/topic/invitation', function (message) {
                messageCreate(message);
            });
            stomp.send("/app/hello", {}, JSON.stringify({
                'name': 'Chat System',
                'content': username + ' joined to the chat'
            }));
        })
    }
}

function messageCreate(message) {
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
    resetProperties(false);
    console.log('Disconnected');
}

function sendMessage() {
    var messageContent = $('#text-input').val().trim();
    var username = $('#name').val().trim();
    stomp.send("/app/hello", {}, JSON.stringify({'content': messageContent, 'name': username}));
    $('#text-input').val('');
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    resetProperties(false);
    $("#start-chat").click(function () {
        connect();
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

function resetProperties(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#text-input").show();
        $("#sendMessage").show();
        console.log("Text input: SHOW")
    } else {
        $("#sendMessage").hide();
        $("#text-input").hide();
        console.log("Text input: HIDE")
    }
}

