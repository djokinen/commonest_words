var words;
var isSpeechSupported;

var init = function () {
	isSpeechSupported = responsiveVoice.voiceSupport();

	initWords();

	$("#word").html(words[Math.floor((Math.random() * words.length))]);

	$("#next").click(function (e) {
		if (words.length > 0) {
			var index = Math.floor((Math.random() * words.length));
			$("#word").html(words[index]);
			words.splice(index, 1);
		}
		else {
			initWords();
			var msg = "Congratulations! You have read all " + words.length + " words";
			if (isSpeechSupported) {
				responsiveVoice.speak(msg);
			}
			alert(msg);
		}
	});

	$("#word,#listen").click(function (e) {
		if (isSpeechSupported) {
			var msg = $("#word").html();
			responsiveVoice.speak(msg);
		}
	});
};

var initWords = function () {
	words = new Array("the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", "for", "not", "on", "with", "he", "as",
	"you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one",
	"all", "would", "there", "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make",
	"can", "like", "time", "no", "just", "him", "know", "take", "person", "into", "year", "your", "good", "some", "could", "them",
	"see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also", "back", "after", "use", "two",
	"how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day", "most", "us");
};