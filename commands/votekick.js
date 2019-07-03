module.exports = {
	name: 'votekick',
	description: 'Votekick!',
	execute(message, args) {
		client.on('message', message => {

		  // Ignore messages that aren't from a guild
		  if (!message.guild) return;
		  if (message.content.startsWith(`${prefix}votekick`)) {
		  const user = message.mentions.users.first();
		  // If we have a user mentioned

		  if (user) {
		    // Now we get the member from the user
		    const member = message.guild.member(user);
		    // If the member is in the guild
		    if (member)  {
		      message.react('👍').then(() => message.react('👎'))

		    var proKick = message.react.count();


		    console.log( proKick );

		      }
					else {
						message.reply ('sorry, this is not a user!')
					}
				}
			}
		});
	}
};
