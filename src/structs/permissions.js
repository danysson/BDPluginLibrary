/**
 * Class representing Discord's permissions system.
 * 
 * This will soon be rewritten in a much simpler manner using internals.
 * @deprecated
 */
class DiscordPermissions {
	constructor(perms) {
		this.perms = perms;
	}

	static get version() {return "0.0.1";}

	static hasPermission(perms, perm) {
		return (perms & perm) == perm;
	}

	static get FullPermissions() { return 2146958591; }
	static get DefaultPermissions() { return 104324161; }

	static generateFullPermissions() { return new DiscordPermissions(DiscordPermissions.FullPermissions); }
	static generateDefaultPermissions() { return new DiscordPermissions(DiscordPermissions.DefaultPermissions); }

	/* General Permissions */
	static get Administrator() { return 0x8; }
	static get ViewAuditLog() { return 0x80; }
	static get ManageServer() { return 0x20; }
	static get ManageRoles() { return 0x10000000; }
	static get ManageChannels() { return 0x10; }
	static get KickMembers() { return 0x2; }
	static get BanMembers() { return 0x4; }
	static get CreateInvite() { return 0x1; }
	static get ChangeNickname() { return 0x4000000; }
	static get ManageNicknames() { return 0x8000000; }
	static get ManageEmojis() { return 0x40000000; }
	static get ManageWebhooks() { return 0x20000000; }

	/* Text Permissions */
	static get ReadMessages() { return 0x400; }
	static get SendTTSMessages() { return 0x1000; }
	static get EmbedLinks() { return 0x4000; }
	static get ReadMessageHistory() { return 0x10000; }
	static get UseExternalEmojis() { return 0x40000; }
	static get SendMessages() { return 0x800; }
	static get ManageMessages() { return 0x2000; }
	static get AttachFiles() { return 0x8000; }
	static get MentionEveryone() { return 0x20000; }
	static get AddReactions() { return 0x40; }

	/* Voice Permissions */
	static get ViewChannel() { return 0x400; }
	static get Connect() { return 0x100000; }
	static get MuteMembers() { return 0x400000; }
	static get MoveMembers() { return 0x1000000; }
	static get Speak() { return 0x200000; }
	static get DeafenMembers() { return 0x800000; }
	static get UseVoiceActivity() { return 0x2000000; }

	static get PermissionList() {
		return ["administrator", "viewAuditLog", "manageServer", "manageRoles", "manageChannels", "kickMembers", "banMembers", "createInvite",
				"changeNickname", "manageNicknames", "manageEmojis", "manageWebhooks",
				"readMessages", "sendTTSMessages", "embedLinks", "readMessageHistory", "useExternalEmojis", "sendMessages", "manageMessages",
				"attachFiles", "mentionEveryone", "addReactions",
				"viewChannel", "connect", "muteMembers", "moveMembers", "speak", "deafenMembers", "useVoiceActivity"];
	}

    // eslint-disable-next-line no-undef
	[Symbol.iterator]() { return DiscordPermissions.PermissionList.values(); }

	hasPermission(perm) { return (this.perms & perm) == perm; }
	setPermission(perm, value) {
		if (value) this.allowPermission(perm);
		else this.denyPermission(perm);
	}

	allowPermission(perm) { this.perms = this.perms | perm; }
	denyPermission(perm) { this.perms = this.perms & ~perm; }

	/* General Permissions */
	get administrator() { return this.hasPermission(DiscordPermissions.Administrator); }
	get viewAuditLog() { return this.hasPermission(DiscordPermissions.ViewAuditLog); }
	get manageServer() { return this.hasPermission(DiscordPermissions.ManageServer); }
	get manageRoles() { return this.hasPermission(DiscordPermissions.ManageRoles); }
	get manageChannels() { return this.hasPermission(DiscordPermissions.ManageChannels); }
	get kickMembers() { return this.hasPermission(DiscordPermissions.KickMembers); }
	get banMembers() { return this.hasPermission(DiscordPermissions.BanMembers); }
	get createInvite() { return this.hasPermission(DiscordPermissions.CreateInvite); }
	get changeNickname() { return this.hasPermission(DiscordPermissions.ChangeNickname); }
	get manageNicknames() { return this.hasPermission(DiscordPermissions.ManageNicknames); }
	get manageEmojis() { return this.hasPermission(DiscordPermissions.ManageEmojis); }
	get manageWebhooks() { return this.hasPermission(DiscordPermissions.ManageWebhooks); }

	/* Text Permissions */
	get readMessages() { return this.hasPermission(DiscordPermissions.ReadMessages); }
	get sendTTSMessages() { return this.hasPermission(DiscordPermissions.SendTTSMessages); }
	get embedLinks() { return this.hasPermission(DiscordPermissions.EmbedLinks); }
	get readMessageHistory() { return this.hasPermission(DiscordPermissions.ReadMessageHistory); }
	get useExternalEmojis() { return this.hasPermission(DiscordPermissions.UseExternalEmojis); }
	get sendMessages() { return this.hasPermission(DiscordPermissions.SendMessages); }
	get manageMessages() { return this.hasPermission(DiscordPermissions.ManageMessages); }
	get attachFiles() { return this.hasPermission(DiscordPermissions.AttachFiles); }
	get mentionEveryone() { return this.hasPermission(DiscordPermissions.MentionEveryone); }
	get addReactions() { return this.hasPermission(DiscordPermissions.AddReactions); }

	/* Voice Permissions */
	get viewChannel() { return this.hasPermission(DiscordPermissions.ViewChannel); }
	get connect() { return this.hasPermission(DiscordPermissions.Connect); }
	get muteMembers() { return this.hasPermission(DiscordPermissions.MuteMembers); }
	get moveMembers() { return this.hasPermission(DiscordPermissions.MoveMembers); }
	get speak() { return this.hasPermission(DiscordPermissions.Speak); }
	get deafenMembers() { return this.hasPermission(DiscordPermissions.DeafenMembers); }
	get useVoiceActivity() { return this.hasPermission(DiscordPermissions.UseVoiceActivity); }



	/* General Permissions */
	set administrator(allowed) { return this.setPermission(DiscordPermissions.Administrator, allowed); }
	set viewAuditLog(allowed) { return this.setPermission(DiscordPermissions.ViewAuditLog, allowed); }
	set manageServer(allowed) { return this.setPermission(DiscordPermissions.ManageServer, allowed); }
	set manageRoles(allowed) { return this.setPermission(DiscordPermissions.ManageRoles, allowed); }
	set manageChannels(allowed) { return this.setPermission(DiscordPermissions.ManageChannels, allowed); }
	set kickMembers(allowed) { return this.setPermission(DiscordPermissions.KickMembers, allowed); }
	set banMembers(allowed) { return this.setPermission(DiscordPermissions.BanMembers, allowed); }
	set createInvite(allowed) { return this.setPermission(DiscordPermissions.CreateInvite, allowed); }
	set changeNickname(allowed) { return this.setPermission(DiscordPermissions.ChangeNickname, allowed); }
	set manageNicknames(allowed) { return this.setPermission(DiscordPermissions.ManageNicknames, allowed); }
	set manageEmojis(allowed) { return this.setPermission(DiscordPermissions.ManageEmojis, allowed); }
	set manageWebhooks(allowed) { return this.setPermission(DiscordPermissions.ManageWebhooks, allowed); }

	/* Text Permissions */
	set readMessages(allowed) { return this.setPermission(DiscordPermissions.ReadMessages, allowed); }
	set sendTTSMessages(allowed) { return this.setPermission(DiscordPermissions.SendTTSMessages, allowed); }
	set embedLinks(allowed) { return this.setPermission(DiscordPermissions.EmbedLinks, allowed); }
	set readMessageHistory(allowed) { return this.setPermission(DiscordPermissions.ReadMessageHistory, allowed); }
	set useExternalEmojis(allowed) { return this.setPermission(DiscordPermissions.UseExternalEmojis, allowed); }
	set sendMessages(allowed) { return this.setPermission(DiscordPermissions.SendMessages, allowed); }
	set manageMessages(allowed) { return this.setPermission(DiscordPermissions.ManageMessages, allowed); }
	set attachFiles(allowed) { return this.setPermission(DiscordPermissions.AttachFiles, allowed); }
	set mentionEveryone(allowed) { return this.setPermission(DiscordPermissions.MentionEveryone, allowed); }
	set addReactions(allowed) { return this.setPermission(DiscordPermissions.AddReactions, allowed); }

	/* Voice Permissions */
	set viewChannel(allowed) { return this.setPermission(DiscordPermissions.ViewChannel, allowed); }
	set connect(allowed) { return this.setPermission(DiscordPermissions.Connect, allowed); }
	set muteMembers(allowed) { return this.setPermission(DiscordPermissions.MuteMembers, allowed); }
	set moveMembers(allowed) { return this.setPermission(DiscordPermissions.MoveMembers, allowed); }
	set speak(allowed) { return this.setPermission(DiscordPermissions.Speak, allowed); }
	set deafenMembers(allowed) { return this.setPermission(DiscordPermissions.DeafenMembers, allowed); }
	set useVoiceActivity(allowed) { return this.setPermission(DiscordPermissions.UseVoiceActivity, allowed); }
}

export default DiscordPermissions;