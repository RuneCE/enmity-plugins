function q(e){window.enmity.plugins.registerPlugin(e)}var H="FriendInvites",W="1.0.2",K="Easily create a Discord friend invite link to make it easier for users to add you as a friend",X=[{name:"spin",id:"308440976723148800"}],J="#ff0069",A="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/FriendInvites.js",P={name:H,version:W,description:K,authors:X,color:J,sourceUrl:A},N;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(N||(N={}));var b;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(b||(b={}));var p;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(p||(p={}));var C;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(C||(C={}));var D;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(D||(D={}));var U;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(U||(U={}));const _={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,n)=>window.enmity.modules.filters.byName(e,n),byTypeName:(e,n)=>window.enmity.modules.filters.byTypeName(e,n),byDisplayName:(e,n)=>window.enmity.modules.filters.byDisplayName(e,n)};function T(...e){return window.enmity.modules.bulk(...e)}function F(...e){return window.enmity.modules.getByKeyword(...e)}window.enmity.modules.common;function u(e,n,i,s){window.enmity.clyde.sendReply(e,n,i,s)}const Q={id:"create-friend-invite",name:"createinvite",displayName:"createinvite",description:"Create a friend invite link",displayDescription:"Create a friend invite link",type:b.Chat,inputType:p.BuiltInText,options:[{name:"whisper",displayName:"whisper",description:"Only you can see the response",displayDescription:"Only you can see the response",type:D.Boolean,required:!1}],execute:async function(e,n){var i,s,r,c;const g=e[e.findIndex(l=>l.name==="whisper")];try{const l=await F("friendinvite").createFriendInvite();if(l)if((i=g==null?void 0:g.value)==null||i){u((s=n==null?void 0:n.channel.id)!=null?s:"0",`Your friend invite link is: discord.gg/${l.code}
Max uses: ${l.max_uses}
Expires: <t:${new Date(l.expires_at).getTime()/1e3}:R>`);return}else return{content:`discord.gg/${l.code}`};else console.log("[ createFriendInvite Response ]",l),u((r=n==null?void 0:n.channel.id)!=null?r:"0","Something went wrong, please try again later. Fetch response sent to console.")}catch(l){console.log("[ createFriendInvite Error ]",l),u((c=n==null?void 0:n.channel.id)!=null?c:"0","An error occured while creating the friend invite. Check debug logs for more info.")}}},Z={id:"list-friend-invites",name:"listinvites",displayName:"listinvites",description:"List your current friend invite links",displayDescription:"List your current friend invite links",type:b.Chat,inputType:p.BuiltInText,options:[{name:"whisper",displayName:"whisper",description:"Only you can see the response",displayDescription:"Only you can see the response",type:D.Boolean,required:!1}],execute:async function(e,n){var i,s,r,c,g;const l=e[e.findIndex(d=>d.name==="whisper")];try{const d=await F("friendinvite").getAllFriendInvites();if(d){const h={type:"rich",title:"Friend Invites",description:d.length==0?"You have no friend invites!":`${d.map(w=>`\`discord.gg/${w.code}\` - uses: ${w.uses}/${w.max_uses} - expires <t:${new Date(w.expires_at).getTime()/1e3}:R>`).join(`
`)}`,footer:{text:"Friend invites are mostly undocumented and any of these features may break at any time."},color:"0xff0069"};if((i=l==null?void 0:l.value)==null||i){u((s=n==null?void 0:n.channel.id)!=null?s:"0",{embeds:[h]});return}else if(d.length==0){u((r=n==null?void 0:n.channel.id)!=null?r:"0","You have no friend invites!");return}else return{content:`${d.map(w=>`\`discord.gg/${w.code}\` - uses: ${w.uses}/${w.max_uses} - expires <t:${new Date(w.expires_at).getTime()/1e3}:R>`).join(`
`)}`}}else console.log("[ listFriendInvites Response ]",d),u((c=n==null?void 0:n.channel.id)!=null?c:"0","Something went wrong, please try again later. Fetch response sent to console.")}catch(d){console.log("[ listFriendInvites Error ]",d),u((g=n==null?void 0:n.channel.id)!=null?g:"0","An error occured while fetching and listing friend invites. Check debug logs for more info.")}}},O={id:"revoke-friend-invites",name:"revokeinvites",displayName:"revokeinvites",description:"Revoke all of your friend invites (this is irreversible and will delete all of your friend invites)",displayDescription:"Revoke all of your friend invites (this is irreversible and will delete all of your friend invites)",type:b.Chat,inputType:p.BuiltInText,execute:async function(e,n){var i,s,r;try{await F("friendinvite").revokeFriendInvites();const c=await F("friendinvite").getAllFriendInvites();if(c.length==0){u((i=n==null?void 0:n.channel.id)!=null?i:"0","All of your friend invites have been revoked.");return}else console.log("[ revokeFriendInvites Response ]",c),u((s=n==null?void 0:n.channel.id)!=null?s:"0","Something went wrong, please try again later. Fetch response sent to console.")}catch(c){console.log("[ revokeFriendInvites Error ]",c),u((r=n==null?void 0:n.channel.id)!=null?r:"0","An error occured while revoking friend invites. Check debug logs for more info.")}}},ee=[Q,Z,O],y=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const M=window.enmity.modules.common.Native,t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const $=window.enmity.modules.common.Storage,I=window.enmity.modules.common.Toasts,R=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const V=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const ne=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const Y=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const te=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const oe=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const f=o.Text;o.TextInput,o.TouchableHighlight;const S=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const E=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const B=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const a=o.FormRow,G=o.FormSection;o.FormSelect,o.FormSubLabel;const ie=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const j=e=>{let n=0;for(let i in e)n++;return n},se=e=>{let n=e.split(`
`).map(i=>{if(i!="")return`"${i.replaceAll(":",'":"').replace(" ","")}",`});return n[0]=`{${n[0]}`,n[j(n)]=`${n[j(n)]}}`,n=n.join(""),n=n.replaceAll("undefined",""),n=n.split("").reverse().join("").replace(",","").split("").reverse().join(""),n};async function re(){try{let e=await $.getItem("device_list");if(e)return JSON.parse(e);let n=(await V.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,i=se(n);await $.setItem("device_list",i);let s=await $.getItem("device_list");return JSON.parse(s)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function le(e,n){let i=await re();return`**[${e}] Debug Information**
> **Plugin Version:** ${n}
> **Software Version:** ${M.DCDDeviceManager.systemVersion}
> **Device:** ${i[M.DCDDeviceManager.device]}`}function m(e){return window.enmity.assets.getIDByName(e)}const v={Debug:m("debug"),Retry:m("ic_message_retry"),Failed:m("Small"),Cancel:m("ic_megaphone_nsfw_16px"),Delete:m("ic_message_delete"),Copy:m("toast_copy_link"),Open:m("ic_leave_stage"),Clipboard:m("pending-alert"),Debug_Command:{Sent:m("ic_application_command_24px"),Clock:m("clock")},Settings:{Toasts:{Context:m("toast_image_saved"),Settings:m("ic_selection_checked_24px")},Debug:m("ic_rulebook_16px")}},z=e=>{I.open({content:`Copied ${e} to clipboard.`,source:v.Clipboard})},{native:x}=window.enmity;function ae(){x.reload()}x.version,x.build,x.device,x.version;async function ce({manifest:e}){const n=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`;let i=(await(await V.get(n)).text).match(/[0-9].[0-9].[0-9]/g);!i||(i=i[0].replaceAll('"',""),i!=e.version?me(n,i,e):de(e.name,e.version))}const me=(e,n,i)=>{R.show({title:"Update found",body:`A newer version is available for ${i.name}.
Would you like to install version ${n} now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>ue(e,n,i)})},de=(e,n)=>{console.log(`[${e}] is on the latest version (${n})`),I.open({content:`${e} is on the latest version (${n})`,source:v.Delete})};async function ue(e,n,i){window.enmity.plugins.installPlugin(pluginUrl,({data:s})=>{console.log(`${i.name} Update Error`,s),s=="installed-plugin"||s=="overriden-plugin"?R.show({title:`Updated ${i.name}`,body:`Successfully updated to version ${i.version}. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Later",onConfirm:()=>{ae()}}):R.show({title:"Error",body:`Something went wrong while updating ${i.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{R.close()},onCancel:()=>{Router.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${i.name}%20Update%20Error`)}})})}const L=window.enmity.modules.common.Components.General.Animated,[k,ge]=T(_.byProps("transitionToGuild"),_.byProps("setString"));var we=({manifest:e})=>{const n=Y.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:y.ThemeColorMap.HEADER_PRIMARY,fontFamily:y.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:y.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),i=t.useRef(new L.Value(1)).current,s=()=>{L.spring(i,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},r=()=>{L.spring(i,{toValue:1,duration:250,useNativeDriver:!0}).start()},c=()=>{k.openURL("https://spin.rip/")},g={transform:[{scale:i}]};return t.createElement(t.Fragment,null,t.createElement(E,{style:n.container},t.createElement(S,{onPress:c,onPressIn:s,onPressOut:r},t.createElement(L.View,{style:[g]},t.createElement(te,{style:[n.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),t.createElement(E,{style:n.text_container},t.createElement(S,{onPress:()=>{k.openURL(e.sourceUrl)}},t.createElement(f,{style:[n.main_text,n.header]},e.name," ")),t.createElement(E,{style:{flexDirection:"row"}},t.createElement(f,{style:[n.main_text,n.sub_header]},"A plugin by"),t.createElement(S,{onPress:()=>{k.openURL("https://spin.rip/")}},t.createElement(f,{style:[n.main_text,n.sub_header,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),t.createElement(E,{style:{flexDirection:"row"}},t.createElement(f,{style:[n.main_text,n.sub_header]},"Settings page by"),t.createElement(S,{onPress:()=>{k.openURL("https://github.com/acquitelol/")}},t.createElement(f,{style:[n.main_text,n.sub_header,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},"Acquite <3"))),t.createElement(E,null,t.createElement(S,{style:{flexDirection:"row"},onPress:()=>{ge.setString(`**${e.name}** v${e.version}`),z("plugin name and version")}},t.createElement(f,{style:[n.main_text,n.sub_header]},"Version:"),t.createElement(f,{style:[n.main_text,n.sub_header,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[ve,he]=T(_.byProps("transitionToGuild"),_.byProps("setString"));var ye=({manifest:e,settings:n,hasToasts:i,section:s})=>{const r=Y.createThemedStyleSheet({icon:{color:y.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:y.ThemeColorMap.TEXT_MUTED}}),[c,g]=t.useState(),[l,d]=t.useState();return t.createElement(t.Fragment,null,t.createElement(oe,{onTouchStart:h=>{g(h.nativeEvent.pageX),d(h.nativeEvent.pageY)},onTouchEnd:h=>{c-h.nativeEvent.pageX<-100&&l-h.nativeEvent.pageY<40&&l-h.nativeEvent.pageY>-40&&ne.pop()}},t.createElement(we,{manifest:e}),s,t.createElement(G,{title:"Utility"},i&&t.createElement(t.Fragment,null,t.createElement(a,{label:"Initialization Toasts",leading:t.createElement(a.Icon,{style:r.icon,source:v.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:t.createElement(ie,{value:n.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{n.toggle(`${e.name}-toastEnable`,!1),I.open({content:`Successfully ${n.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} Initialization Toasts.`,source:v.Settings.Toasts.Settings})}})}),t.createElement(B,null)),t.createElement(a,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:t.createElement(a.Icon,{style:r.icon,source:v.Settings.Debug}),trailing:a.Arrow,onPress:async function(){he.setString(await le(e.name,e.version)),z("plugin debug information")}}),t.createElement(B,null),t.createElement(a,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:t.createElement(a.Icon,{style:r.icon,source:v.Delete}),trailing:a.Arrow,onPress:async function(){await $.removeItem("device_list"),I.open({content:"Cleared device list storage.",source:v.Settings.Toasts.Settings})}})),t.createElement(G,{title:"Source"},t.createElement(a,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:t.createElement(a.Icon,{style:r.icon,source:v.Copy}),trailing:a.Arrow,onPress:()=>{ce({manifest:e})}}),t.createElement(B,null),t.createElement(a,{label:"Source",subLabel:`View ${e.name} source code`,leading:t.createElement(a.Icon,{style:r.icon,source:v.Open}),trailing:a.Arrow,onPress:()=>{ve.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),t.createElement(a,{label:`Plugin Version: ${e.version}`})))};const fe={...P,onStart(){this.commands=ee},onStop(){this.commands=[]},patches:[],getSettingsPanel({settings:e}){return t.createElement(ye,{manifest:P,settings:e,hasToasts:!1,section:[]})}};q(fe);