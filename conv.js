var prompt=require('prompt-sync')();
var watson=require('watson-developer-cloud');
var workspace='84e872fb-0dc7-45f3-9b56-f861f8a1ee50';
var conversation=watson.conversation({
username:'af3d2ef8-54d6-401c-bbaf-beed336097d3',
password: '7ckGJhGf38JG',
version: 'v1',
version_date: '2018-03-09'
});

conversation.message({
workspace_id=workspace,
input: {'text':''}
}, processUserInput);

function processUserInput(err,response){
if(err){
	console.log(err);
	return;
	}
if(response.intents.length>0){
	console.log
	('Intent: ');
	console.log(response.intents[0]);
	}
if(response.output.text.length>0){
console.log(response.output.text[0]);
}

var newMessage=prompt('enter response: ');
if(newMessage=='stop'){
	return;
	}
conversation.message({
	workspace_id: workspace,
	input:{text: newMessage},
	context: response.context,
})