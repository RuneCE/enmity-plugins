function S(e,o,n){window.enmity.settings.set(e,o,n)}function N(e,o,n){return window.enmity.settings.get(e,o,n)}function L(e,o,n){return window.enmity.settings.getBoolean(e,o,n)}const{components:i}=window.enmity;i.Alert;const tt=i.Button;i.FlatList;const Re=i.Image;i.ImageBackground,i.KeyboardAvoidingView,i.Modal,i.Pressable,i.RefreshControl;const Ue=i.ScrollView;i.SectionList,i.StatusBar,i.StyleSheet,i.Switch;const f=i.Text;i.TextInput,i.TouchableHighlight;const C=i.TouchableOpacity;i.TouchableWithoutFeedback,i.Touchable;const E=i.View;i.VirtualizedList,i.Form,i.FormArrow,i.FormCTA,i.FormCTAButton,i.FormCardSection,i.FormCheckbox;const D=i.FormDivider;i.FormHint,i.FormIcon;const ot=i.FormInput;i.FormLabel,i.FormRadio;const c=i.FormRow,J=i.FormSection;i.FormSelect,i.FormSubLabel;const K=i.FormSwitch;i.FormTernaryCheckBox,i.FormText,i.FormTextColors,i.FormTextSizes;function nt(e){window.enmity.plugins.registerPlugin(e)}const B={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,o)=>window.enmity.modules.filters.byName(e,o),byTypeName:(e,o)=>window.enmity.modules.filters.byTypeName(e,o),byDisplayName:(e,o)=>window.enmity.modules.filters.byDisplayName(e,o)};function ae(...e){return window.enmity.modules.bulk(...e)}function ee(...e){return window.enmity.modules.getByProps(...e)}function lt(...e){return window.enmity.modules.getByName(...e)}function at(...e){return window.enmity.modules.getByKeyword(...e)}window.enmity.modules.common;const _=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const te=window.enmity.modules.common.Native,t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const b=window.enmity.modules.common.Storage,v=window.enmity.modules.common.Toasts,I=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const Ae=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const M=window.enmity.modules.common.Navigation,st=window.enmity.modules.common.NavigationNative,ke=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const q=window.enmity.modules.common.StyleSheet,it=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const rt=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function ct(e){return window.enmity.patcher.create(e)}const Ve=ke.createStackNavigator(),{ThemeColorMap:P}=it;var Ge=({name:e="Page",component:o=E,close_button:n={name:"Close",functionality:()=>{M.pop()}}}={})=>{const l=q.createThemedStyleSheet({container:{backgroundColor:P.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:P.BACKGROUND_MOBILE_PRIMARY,color:P.TEXT_NORMAL},header:{backgroundColor:P.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:P.HEADER_PRIMARY},close:{color:P.HEADER_PRIMARY}});return t.createElement(st.NavigationContainer,null,t.createElement(Ve.Navigator,{initialRouteName:e,style:l.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:l.cardStyle,headerStyle:l.header,headerTitleContainerStyle:l.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(Ve.Screen,{name:e,component:o,options:{headerTitleStyle:{color:"white"},headerLeft:()=>t.createElement(tt,{color:l.close.color,title:n.name,onPress:n.functionality}),...ke.TransitionPresets.ModalSlideFromBottomIOS}})))};const Ye=e=>{let o=0;for(let n in e)o++;return o};function g(e){return window.enmity.assets.getIDByName(e)}const d={Debug:g("debug"),Retry:g("ic_message_retry"),Failed:g("Small"),Cancel:g("ic_megaphone_nsfw_16px"),Add:g("add_white"),Delete:g("ic_message_delete"),Clear:g("ic_clear_all_24px"),Pencil:g("ic_pencil_24px"),Copy:g("toast_copy_link"),Open:g("ic_leave_stage"),Clipboard:g("pending-alert"),Debug_Command:{Sent:g("ic_application_command_24px"),Clock:g("clock")},Settings:{Toasts:{Context:g("toast_image_saved"),Settings:g("ic_selection_checked_24px")},Self:g("friends_toast_icon"),Share:g("share"),Robot:g("ic_robot_24px"),Commands:g("ic_profile_badge_bot_commands"),Debug:g("ic_rulebook_16px")}},oe=e=>{v.open({content:`Copied ${e} to clipboard.`,source:d.Clipboard})},dt=e=>{let o=e.split(`
`).map(n=>{if(n!="")return`"${n.replaceAll(":",'":"').replace(" ","")}",`});return o[0]=`{${o[0]}`,o[Ye(o)]=`${o[Ye(o)]}}`,o=o.join(""),o=o.replaceAll("undefined",""),o=o.split("").reverse().join("").replace(",","").split("").reverse().join(""),o};async function mt(){try{let e=await b.getItem("device_list");if(e)return JSON.parse(e);let o=(await Ae.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,n=dt(o);await b.setItem("device_list",n);let l=await b.getItem("device_list");return JSON.parse(l)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function ut(e,o,n){let l=await mt();return`**[${e}] Debug Information**
> **Plugin Version:** ${o}
> **Plugin Build:** ${n.split("-")[1]}
> **Discord Build:** ${te.InfoDictionaryManager.Version} (${te.InfoDictionaryManager.Build})
> **Software Version:** ${te.DCDDeviceManager.systemVersion}
> **Device:** ${l[te.DCDDeviceManager.device]}`}const{native:Q}=window.enmity;function gt(){Q.reload()}Q.version,Q.build,Q.device,Q.version;const ht=ee("transitionToGuild");async function vt({manifest:e}){const o=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,n=await(await Ae.get(o)).text;let l=n.match(/\d\.\d\.\d+/g),r=n.match(/patch\-\d\.\d\.\d+/g);return!l||!r?He(e.name,e.version):(l=l[0],r=r[0],l!=e.version?Oe(o,l,r.split("-")[1],e,!1):r!=e.build?Oe(o,l,r.split("-")[1],e,!0):He(e.name,e.version))}const Oe=(e,o,n,l,r)=>{const u=r?n:o;I.show({title:"Update found",body:`A newer ${r?"build":"version"} is available for ${l.name}. ${r?`
The version will remain at ${o}, but the build will update to ${n}.`:""}
Would you like to install ${r?`build \`${n}\``:`version \`${o}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>_t(e,u,l,r)})},He=(e,o)=>{console.log(`[${e}] Plugin is on the latest version, which is ${o}`),v.open({content:`${e} is on latest version (${o})`,source:d.Settings.Toasts.Settings})};async function _t(e,o,n,l){window.enmity.plugins.installPlugin(e,({data:r})=>{r=="installed_plugin"||r=="overridden_plugin"?I.show({title:`Updated ${n.name}`,body:`Successfully updated to ${l?"build":"version"} \`${o}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{gt()}}):I.show({title:"Error",body:`Something went wrong while updating ${n.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{ht.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${n.name}%20Update%20Error%3A%20${l?`b${o}`:`v${o}`}`)}})})}const ne=window.enmity.modules.common.Components.General.Animated,[le,yt]=ae(B.byProps("transitionToGuild"),B.byProps("setString"));var wt=({manifest:e})=>{const o=q.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:_.ThemeColorMap.HEADER_PRIMARY,fontFamily:_.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:_.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),n=t.useRef(new ne.Value(1)).current,l=()=>{ne.spring(n,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},r=()=>{ne.spring(n,{toValue:1,duration:250,useNativeDriver:!0}).start()},u=()=>{le.openURL("https://spin.rip/")},h={transform:[{scale:n}]};return t.createElement(t.Fragment,null,t.createElement(E,{style:o.container},t.createElement(C,{onPress:u,onPressIn:l,onPressOut:r},t.createElement(ne.View,{style:[h]},t.createElement(Re,{style:[o.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),t.createElement(E,{style:o.text_container},t.createElement(C,{onPress:()=>{le.openURL(e.sourceUrl)}},t.createElement(f,{style:[o.main_text,o.header]},e.name," ")),t.createElement(E,{style:{flexDirection:"row"}},t.createElement(f,{style:[o.main_text,o.sub_header]},"A plugin by"),t.createElement(C,{onPress:()=>{le.openURL("https://spin.rip/")}},t.createElement(f,{style:[o.main_text,o.sub_header,{paddingLeft:4,fontFamily:_.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),t.createElement(E,{style:{flexDirection:"row"}},t.createElement(f,{style:[o.main_text,o.sub_header]},"Settings page by"),t.createElement(C,{onPress:()=>{le.openURL("https://github.com/acquitelol/")}},t.createElement(f,{style:[o.main_text,o.sub_header,{paddingLeft:4,fontFamily:_.Fonts.DISPLAY_BOLD}]},"Acquite <3"))),t.createElement(E,null,t.createElement(C,{style:{flexDirection:"row"},onPress:()=>{yt.setString(`**${e.name}** v${e.version}`),oe("plugin name and version")}},t.createElement(f,{style:[o.main_text,o.sub_header]},"Version:"),t.createElement(f,{style:[o.main_text,o.sub_header,{paddingLeft:4,fontFamily:_.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[ft,ze]=ae(B.byProps("transitionToGuild"),B.byProps("setString"));var bt=({manifest:e,settings:o,hasToasts:n,section:l,commands:r})=>{const u=q.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:_.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:_.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),[h,x]=t.useState(),[s,p]=t.useState();return t.createElement(t.Fragment,null,t.createElement(Ue,{onTouchStart:w=>{x(w.nativeEvent.pageX),p(w.nativeEvent.pageY)},onTouchEnd:w=>{h-w.nativeEvent.pageX<-100&&s-w.nativeEvent.pageY<40&&s-w.nativeEvent.pageY>-40&&M.pop()}},t.createElement(wt,{manifest:e}),l,r&&t.createElement(J,{title:"Plugin Commands"},r.map(w=>t.createElement(c,{label:`/${w.name}`,subLabel:w.description,leading:t.createElement(c.Icon,{style:u.icon,source:d.Settings.Commands}),trailing:c.Arrow,onPress:function(){ze.setString(`/${w.name}`),oe(`the command ${w.name}`)}}))),t.createElement(J,{title:"Utility"},n&&t.createElement(t.Fragment,null,t.createElement(c,{label:"Initialization Toasts",leading:t.createElement(c.Icon,{style:u.icon,source:d.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:t.createElement(K,{value:o.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{o.toggle(`${e.name}-toastEnable`,!1),v.open({content:`Successfully ${o.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:d.Settings.Toasts.Settings})}})}),t.createElement(D,null)),t.createElement(c,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:t.createElement(c.Icon,{style:u.icon,source:d.Settings.Debug}),trailing:c.Arrow,onPress:async function(){ze.setString(await ut(e.name,e.version,e.build)),oe("plugin debug information")}}),t.createElement(D,null),t.createElement(c,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:t.createElement(c.Icon,{style:u.icon,source:d.Delete}),trailing:c.Arrow,onPress:async function(){await b.removeItem("device_list"),v.open({content:"Cleared device list storage.",source:d.Settings.Toasts.Settings})}})),t.createElement(J,{title:"Source"},t.createElement(c,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:t.createElement(c.Icon,{style:u.icon,source:d.Copy}),trailing:c.Arrow,onPress:()=>{vt({manifest:e})}}),t.createElement(D,null),t.createElement(c,{label:"Source",subLabel:`View ${e.name} source code`,leading:t.createElement(c.Icon,{style:u.icon,source:d.Open}),trailing:c.Arrow,onPress:()=>{ft.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),t.createElement(c,{style:u.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})))};async function je(e,o,n,l){var r;const u={type:e,author:{...o,avatar:o.avatar?`https://cdn.discordapp.com/avatars/${o.id}/${o.avatar}.${(r=o.avatar)!=null&&r.startsWith("a_")?"gif":"png"}?size=1024`:"https://cdn.discordapp.com/embed/avatars/0.png"},context:n,content:l.edited?[new Date(l.time).toLocaleString(),l.original,l.edited]:[new Date(l.time).toLocaleString(),l.original]};let h=await b.getItem("NoDeleteLogs");h=JSON.parse(h),u!==h[h.length-1]&&(h.push(u),await b.setItem("NoDeleteLogs",JSON.stringify(h)))}var Et="NoDelete",pt="3.5.12",St="patch-1.0.10",Dt='Somewhat basic "Message Logger"',$t=[{name:"Marek (modified by spin)",id:"308440976723148800"}],Lt="#ff0069",Tt="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/NoDelete.js",y={name:Et,version:pt,build:St,description:Dt,authors:$t,color:Lt,sourceUrl:Tt},We;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(We||(We={}));var se;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(se||(se={}));var ie;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(ie||(ie={}));var Xe;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(Xe||(Xe={}));var Je;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(Je||(Je={}));var Ke;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(Ke||(Ke={}));const[Ct,xt]=ae(B.byProps("setString"),B.byProps("fetchProfile")),Nt=lt("StaticSearchBarContainer");var qe=()=>{const e=q.createThemedStyleSheet({main_text:{opacity:.975,letterSpacing:.25},item_container:{display:"flex",flexDirection:"row",alignItems:"center",paddingTop:4,paddingBottom:4,width:"100%"},author_name:{color:_.ThemeColorMap.HEADER_PRIMARY,fontFamily:_.Fonts.DISPLAY_BOLD,fontSize:18,letterSpacing:.25,paddingBottom:4},log_header:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",maxWidth:"95%"},log_sub_header:{display:"flex",flexDirection:"row",alignItems:"center",maxWidth:"50%"},log_time:{color:_.ThemeColorMap.TEXT_MUTED,opacity:.99,fontSize:13,paddingLeft:4},log_type:{color:_.ThemeColorMap.TEXT_MUTED,opacity:.45,fontSize:16,marginLeft:"auto"},avatar_container:{alignSelf:"start",justifySelf:"start"},author_avatar:{width:40,height:40,borderRadius:100},old_message:{color:_.ThemeColorMap.TEXT_MUTED,opacity:.89,fontSize:16},message_content:{color:_.ThemeColorMap.TEXT_NORMAL,opacity:.985,fontSize:16},main_container:{paddingLeft:8,paddingRight:4,paddingTop:2,paddingBottom:16,width:"95%"},text_container:{display:"flex",flexDirection:"column",paddingBottom:4,paddingLeft:8,width:"95%"}}),o=(s,p)=>s.length>p?s.substring(0,p)+"...":s,n=()=>{b.setItem("NoDeleteLogs","[]"),b.getItem("NoDeleteLogs").then(s=>{s=="[]"?I.show({title:"Logs Cleared",body:"NoDelete message logs have been cleared",confirmText:"Close logs",cancelText:"Cancel",onConfirm:()=>M.pop()}):I.show({title:"Error clearing logs",body:"NoDelete logs could not be cleared. Try again or report this issues to spin.",confirmText:"Close logs",cancelText:"Cancel",onConfirm:()=>M.pop()})})},l=N("_nodelete","maxLogs","1000"),[r,u]=t.useState([]),[h,x]=t.useState([]);t.useEffect(()=>{b.getItem("NoDeleteLogs").then(s=>{let p=JSON.parse(s);u(p.reverse())})},[]);for(let s=0;s<r.length;s++)r[s].author.id==null&&(r[s]={type:r[s].type,author:{username:r[s].author,id:r[s].id,avatar:r[s].avatar,bot:"unknown"},context:{guild:"unknown",channel:"unknown",message:"unknown"},content:r[s].content},s==r.length-1&&u(r));return r.length>parseInt(l)&&(L("_nodelete","autoClear",!1)==!1?I.show({title:`Logs have exceeded ${o(l,12)}`,body:`NoDelete logs have exceeded your limit of ${o(l,12)}${parseInt(l)>1e3?`
You may experience performance issues or a laggy log page UI. Clear your logs to fix this issue.`:""}`,confirmText:"Clear logs",cancelText:"Close",onConfirm:()=>n()}):(n(),b.getItem("NoDeleteLogs").then(s=>{s==="[]"?v.open({content:`Auto-cleared ${o(r.length,10)} logs.`,source:d.Settings.Toasts.Settings}):v.open({content:"NoDelete logs could not be cleared. Try again or report this issues to spin.",source:d.Failed})}))),t.createElement(t.Fragment,null,t.createElement(Nt,{placeholder:"Search Logs",onChangeText:s=>x(s)}),t.createElement(c,{label:"Clear all NoDelete message logs",trailing:c.Arrow,onPress:()=>n()}),t.createElement(D,null),t.createElement(Ue,null,t.createElement(E,{style:e.main_container},r.filter(s=>JSON.stringify(s).includes(h)).map(s=>t.createElement(t.Fragment,null,t.createElement(E,{style:e.item_container},t.createElement(C,{onPress:()=>{xt.fetchProfile(s.author.id).then(()=>{rt.showUserProfile({userId:s.author.id})}).catch(p=>{v.open({content:"Error while fetching user. Check logs for more info.",source:d.Failed}),console.log("[NoDelete User Fetch Error]",p)})},style:e.avatar_container},t.createElement(Re,{style:e.author_avatar,source:{uri:s.author.avatar}})),t.createElement(C,{onPress:()=>{Ct.setString(`${s.author.username} (\`${s.author.id}\`):
>>> ${s.content.join(`
`)}`),oe("log content")},style:e.text_container},t.createElement(E,{style:e.log_header},t.createElement(E,{style:e.log_sub_header},t.createElement(f,{style:[e.main_text,e.author_name]},s.author.username),t.createElement(f,{style:[e.main_text,e.log_time]},s.content[0])),t.createElement(f,{style:[e.main_text,e.log_type]},s.type==="edit"?t.createElement(c.Icon,{source:d.Pencil}):t.createElement(c.Icon,{source:d.Delete}))),t.createElement(E,null,s.content.length==3?t.createElement(t.Fragment,null,t.createElement(f,{style:e.old_message},s.content[1]),t.createElement(f,{style:e.message_content},s.content[2])):t.createElement(f,{style:e.message_content},s.content[1])))),t.createElement(D,null))))))};function Bt(e,o,n,l){window.enmity.clyde.sendReply(e,o,n,l)}const It={id:"logs-command",name:"logs",displayName:"logs",description:"Open the NoDelete message logs page",displayDescription:"Open the NoDelete message logs page",type:se.Chat,inputType:ie.BuiltInText,execute:async function(e,o){var n;try{M.push(Ge,{component:qe,name:"NoDelete Message Logs"})}catch(l){console.log("[ NoDelete Error ]",l),Bt((n=o==null?void 0:o.channel.id)!=null?n:"0","An error occured while trying to open NoDelete message logs. Check debug logs for more info.")}}},Qe=[It];var Ze;const et=(Ze=at("getCurrentUser").getCurrentUser())==null?void 0:Ze.id,re=ct("NoDelete"),Mt={...y,patches:[],onStart(){b.getItem("NoDeleteLogs").then(l=>{l==null&&b.setItem("NoDeleteLogs","[]")}).catch(l=>{console.log(`[${y.name} Storage Error]`,l)});let e=0;const o=3,n=()=>{var l,r;const u=L(y.name,`${y.name}-toastEnable`,!1);try{e++;const h=ee("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue"),x=ee("getMessage","getMessages"),s=ee("getChannel","getDMFromUserId");console.log(`${y.name} delayed start attempt ${e}/${o}.`),u&&v.open({content:`[${y.name}] start attempt ${e}/${o}.`,source:d.Debug});for(const T of["MESSAGE_UPDATE","MESSAGE_DELETE"])try{h.dispatch({type:T,message:{}})}catch(m){console.log(`[${y.name} Dispatch Error]`,m)}const p=(l=h._actionHandlers._orderedActionHandlers)==null?void 0:l.MESSAGE_DELETE.find(T=>T.name==="MessageStore"),w=(r=h._actionHandlers._orderedActionHandlers)==null?void 0:r.MESSAGE_UPDATE.find(T=>T.name==="MessageStore");re.before(p,"actionHandler",(T,m)=>{var F,R,U,A,k,V,G,Y,O,H,z,j,W,X;const a=x.getMessage(m[0].channelId,m[0].id);if(!(!((F=a==null?void 0:a.author)!=null&&F.id)||!((R=a==null?void 0:a.author)!=null&&R.username)||!(a!=null&&a.content)&&((U=a==null?void 0:a.attachments)==null?void 0:U.length)==0&&((A=a==null?void 0:a.embeds)==null?void 0:A.length)==0)&&!(L("_nodelete","_logBots",!1)===!1&&((k=a==null?void 0:a.author)==null?void 0:k.bot))&&!(L("_nodelete","_logSelf",!1)===!1&&((V=a==null?void 0:a.author)==null?void 0:V.id)==et)){if(L("_nodelete","_storageLog",!1)==!1&&(m[0]={}),!(a!=null&&a.editedTimestamp)||(a==null?void 0:a.editedTimestamp._isValid)){const Z={type:"MESSAGE_UPDATE",message:{...a,edited_timestamp:"invalid_timestamp",content:(a==null?void 0:a.content)+" `[deleted]`",guild_id:(G=s.getChannel(a==null?void 0:a.channel_id))==null?void 0:G.guild_id},log_edit:!1};h.dispatch(Z)}je("delete",{username:`${(Y=a==null?void 0:a.author)==null?void 0:Y.username}#${(O=a==null?void 0:a.author)==null?void 0:O.discriminator}`,id:(H=a==null?void 0:a.author)==null?void 0:H.id,avatar:(z=a==null?void 0:a.author)==null?void 0:z.avatar,bot:(j=a==null?void 0:a.author)==null?void 0:j.bot},{guild:(W=s.getChannel(a==null?void 0:a.channel_id))==null?void 0:W.guild_id,channel:a==null?void 0:a.channel_id,message:a==null?void 0:a.id},{time:a==null?void 0:a.timestamp,original:(X=a==null?void 0:a.content)==null?void 0:X.replace("`[deleted]`","").trim()})}}),re.before(w,"actionHandler",(T,m)=>{var F,R,U,A,k,V,G,Y,O,H,z,j,W,X,a,Z,ce,de,me,ue,ge,he,ve,_e,ye,we,fe,be,Ee,pe,Se,De,$e,Le,Te,Ce,xe,Ne,Be,Ie,Me,Pe;try{const $=x.getMessage(m[0].message.channel_id,m[0].message.id);if(!($!=null&&$.content)||!((R=(F=m[0])==null?void 0:F.message)!=null&&R.content)||!((A=(U=m[0])==null?void 0:U.message)!=null&&A.content)&&((G=(V=(k=m[0])==null?void 0:k.message)==null?void 0:V.attachments)==null?void 0:G.length)==0&&((H=(O=(Y=m[0])==null?void 0:Y.message)==null?void 0:O.embeds)==null?void 0:H.length)==0||((X=(W=(j=(z=m[0])==null?void 0:z.message)==null?void 0:j.embeds)==null?void 0:W[0])==null?void 0:X.type)==="link"||m[0].log_edit==!1||L("_nodelete","_logBots",!1)===!1&&((ce=(Z=(a=m[0])==null?void 0:a.message)==null?void 0:Z.author)==null?void 0:ce.bot)||L("_nodelete","_logSelf",!1)===!1&&((ue=(me=(de=m[0])==null?void 0:de.message)==null?void 0:me.author)==null?void 0:ue.id)==et)return;try{if(!m[0].edited_timestamp._isValid)return}catch{}const Fe=m[0].message.content;L("_nodelete","_storageLog",!1)==!1&&(m[0].message.content=($==null?void 0:$.content)+" `[edited]`\n"+((he=(ge=m[0])==null?void 0:ge.message)==null?void 0:he.content)),je("edit",{username:`${(ye=(_e=(ve=m[0])==null?void 0:ve.message)==null?void 0:_e.author)==null?void 0:ye.username}#${(be=(fe=(we=m[0])==null?void 0:we.message)==null?void 0:fe.author)==null?void 0:be.discriminator}`,id:(Se=(pe=(Ee=m[0])==null?void 0:Ee.message)==null?void 0:pe.author)==null?void 0:Se.id,avatar:(Le=($e=(De=m[0])==null?void 0:De.message)==null?void 0:$e.author)==null?void 0:Le.avatar,bot:(xe=(Ce=(Te=m[0])==null?void 0:Te.message)==null?void 0:Ce.author)==null?void 0:xe.bot},{guild:m[0].message.guild_id,channel:m[0].message.channel_id,message:m[0].message.id},{time:(Be=(Ne=m[0])==null?void 0:Ne.message)==null?void 0:Be.edited_timestamp,original:(Me=(Ie=$==null?void 0:$.content)==null?void 0:Ie.replace(/\`\[edited\]\`/gim,""))==null?void 0:Me.replace("`[deleted]`","").trim(),edited:`${(Pe=Fe==null?void 0:Fe.replace(/\`\[edited\]\`/gim,""))==null?void 0:Pe.replace("`[deleted]`","").trim()}`})}catch($){console.log(`[${y.name} Error]`,$)}}),console.log(`${y.name} delayed start successful.`),u&&v.open({content:`[${y.name}] start successful.`,source:d.Settings.Toasts.Settings})}catch(h){console.log(`[${y.name} Plugin Error]`,h),e<o?(console.warn(`${y.name} failed to start. Trying again in ${e}0s.`),u&&v.open({content:`[${y.name}] failed to start trying again in ${e}0s.`,source:d.Failed}),setTimeout(n,e*1e4)):(console.error(`${y.name} failed to start. Giving up.`),v.open({content:`${y.name} failed to start. Giving up.`,source:d.Failed}))}};setTimeout(()=>{n()},300),this.commands=Qe},onStop(){re.unpatchAll(),this.commands=[]},getSettingsPanel({settings:e}){const o=q.createThemedStyleSheet({icon:{color:_.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:_.ThemeColorMap.TEXT_MUTED}});return t.createElement(bt,{manifest:y,settings:e,hasToasts:!1,section:t.createElement(t.Fragment,null,t.createElement(J,{title:"Message Logs"},t.createElement(c,{label:"View Message Logs",subLabel:"Tap on an item to copy to clipboard",leading:t.createElement(c.Icon,{style:o.icon,source:d.Settings.Debug}),onPress:()=>{M.push(Ge,{component:qe,name:"NoDelete Message Logs"})}})),t.createElement(D,null),t.createElement(J,{title:"Plugin Settings"},t.createElement(c,{label:"Log bot messages",subLabel:"Whether or not bot message events should be logged",leading:t.createElement(c.Icon,{source:d.Settings.Robot}),trailing:t.createElement(K,{value:e.getBoolean("_nodelete_logBots",!1),onValueChange:()=>{try{e.toggle("_nodelete_logBots",!1),e.getBoolean("_nodelete_logBots",!1)?S("_nodelete","_logBots",!0):S("_nodelete","_logBots",!1),v.open({content:`Log self-events has been set to: ${N("_nodelete","_logBots",!1)}.`,source:d.Settings.Toasts.Settings})}catch(n){console.log("[ NoDelete Toggle Error ]",n),v.open({content:"An error has occurred. Check debug logs for more info.",source:d.Failed})}}})}),t.createElement(D,null),t.createElement(c,{label:"Log my own messages",subLabel:"Whether or not your own edits and deleted messages will be logged",leading:t.createElement(c.Icon,{source:d.Settings.Self}),trailing:t.createElement(K,{value:e.getBoolean("_nodelete_logSelf",!1),onValueChange:()=>{try{e.toggle("_nodelete_logSelf",!1),e.getBoolean("_nodelete_logSelf",!1)?S("_nodelete","_logSelf",!0):S("_nodelete","_logSelf",!1),v.open({content:`Log self-events has been set to: ${N("_nodelete","_logSelf",!1)}.`,source:d.Settings.Toasts.Settings})}catch(n){console.log("[ NoDelete Toggle Error ]",n),v.open({content:"An error has occurred. Check debug logs for more info.",source:d.Failed})}}})}),t.createElement(D,null),t.createElement(c,{label:"Only log to Storage",subLabel:"Message logs will not show in chat, only in Storage",leading:t.createElement(c.Icon,{source:d.Pencil}),trailing:t.createElement(K,{value:e.getBoolean("_nodelete",!1),onValueChange:()=>{try{e.toggle("_nodelete",!1),e.getBoolean("_nodelete",!1)?S("_nodelete","_storageLog",!0):S("_nodelete","_storageLog",!1),v.open({content:`Storage-only log has been set to: ${N("_nodelete","_storageLog",!1)}.`,source:d.Settings.Toasts.Settings})}catch(n){console.log("[ NoDelete Toggle Error ]",n),v.open({content:"An error has occurred. Check debug logs for more info.",source:d.Failed})}}})}),t.createElement(D,null),t.createElement(ot,{value:N("_nodelete","maxLogs","1000"),onChange:n=>/^\d+$/.test(n)?S("_nodelete","maxLogs",n.trim()):S("_nodelete","maxLogs","1000"),title:"Max Logs to Store"}),t.createElement(c,{label:"Auto-clear logs",subLabel:"Message logs will automatically clear after they have exceeded your max logs limit",leading:t.createElement(c.Icon,{source:d.Clear}),trailing:t.createElement(K,{value:e.getBoolean("_nodelete_autoClear",!1),onValueChange:()=>{try{e.toggle("_nodelete_autoClear",!1),e.getBoolean("_nodelete_autoClear",!1)?S("_nodelete","autoClear",!0):S("_nodelete","autoClear",!1),v.open({content:`Logs auto-clearing has been set to: ${N("_nodelete","autoClear",!1)}.`,source:d.Settings.Toasts.Settings})}catch(n){console.log("[ NoDelete Toggle Error ]",n),v.open({content:"An error has occurred. Check debug logs for more info.",source:d.Failed})}}})}))),commands:Qe})}};nt(Mt);
