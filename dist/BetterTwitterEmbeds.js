const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const z=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const G=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const g=o.Text;o.TextInput,o.TouchableHighlight;const b=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const h=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const D=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const r=o.FormRow,_=o.FormSection;o.FormSelect,o.FormSubLabel;const L=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function H(e){window.enmity.plugins.registerPlugin(e)}function x(e,t,i){window.enmity.settings.set(e,t,i)}function C(e,t,i){return window.enmity.settings.get(e,t,i)}function W(e){return window.enmity.patcher.create(e)}var X="BetterTwitterEmbeds",q="1.1.4",J="patch-1.0.12",K="Convert Twitter links to FxTwitter links so the tweet embed is better.",Q=[{name:"spin",id:"308440976723148800"}],Z="#ff0069",ee="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/BetterTwitterEmbeds.js",F={name:X,version:q,build:J,description:K,authors:Q,color:Z,sourceUrl:ee};const u=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const te=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const p=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const w=window.enmity.modules.common.Storage,y=window.enmity.modules.common.Toasts,v=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const A=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const ne=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const B=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const R=e=>{let t=0;for(let i in e)t++;return t},oe=e=>{let t=e.split(`
`).map(i=>{if(i!="")return`"${i.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[R(t)]=`${t[R(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function N(){try{let e=await w.getItem("device_list");if(e)return JSON.parse(e);let t=(await A.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,i=oe(t);await w.setItem("device_list",i);let a=await w.getItem("device_list");return JSON.parse(a)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function ie(e,t,i){let a=await N();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Plugin Build:** ${i.split("-")[1]}
> **Discord Build:** ${p.InfoDictionaryManager.Version} (${p.InfoDictionaryManager.Build})
> **Software Version:** ${p.DCDDeviceManager.systemVersion}
> **Device:** ${a[p.DCDDeviceManager.device]}`}function l(e){return window.enmity.assets.getIDByName(e)}const m={Debug:l("debug"),Retry:l("ic_message_retry"),Failed:l("Small"),Cancel:l("ic_megaphone_nsfw_16px"),Add:l("add_white"),Delete:l("ic_message_delete"),Clear:l("ic_clear_all_24px"),Pencil:l("ic_pencil_24px"),Copy:l("toast_copy_link"),Open:l("ic_leave_stage"),Clipboard:l("pending-alert"),Debug_Command:{Sent:l("ic_application_command_24px"),Clock:l("clock")},Settings:{Toasts:{Context:l("toast_image_saved"),Settings:l("ic_selection_checked_24px")},Share:l("share"),Commands:l("ic_profile_badge_bot_commands"),Debug:l("ic_rulebook_16px")}},P=e=>{y.open({content:`Copied ${e} to clipboard.`,source:m.Clipboard})},S={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function k(...e){return window.enmity.modules.bulk(...e)}function ae(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const{native:f}=window.enmity;function se(){f.reload()}f.version,f.build,f.device,f.version;const re=ae("transitionToGuild");async function le({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,i=await(await A.get(t)).text;let a=i.match(/\d\.\d\.\d+/g),s=i.match(/patch\-\d\.\d\.\d+/g);return!a||!s?M(e.name,e.version):(a=a[0],s=s[0],a!=e.version?V(t,a,s.split("-")[1],e,!1):s!=e.build?V(t,a,s.split("-")[1],e,!0):M(e.name,e.version))}const V=(e,t,i,a,s)=>{const c=s?i:t;v.show({title:"Update found",body:`A newer ${s?"build":"version"} is available for ${a.name}. ${s?`
The version will remain at ${t}, but the build will update to ${i}.`:""}
Would you like to install ${s?`build \`${i}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>me(e,c,a,s)})},M=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),y.open({content:`${e} is on latest version (${t})`,source:m.Settings.Toasts.Settings})};async function me(e,t,i,a){window.enmity.plugins.installPlugin(e,({data:s})=>{s=="installed_plugin"||s=="overridden_plugin"?v.show({title:`Updated ${i.name}`,body:`Successfully updated to ${a?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{se()}}):v.show({title:"Error",body:`Something went wrong while updating ${i.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{re.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${i.name}%20Update%20Error%3A%20${a?`b${t}`:`v${t}`}`)}})})}async function ce(e){let t=p.DCDDeviceManager.device,i=await N();t.includes("iPhone")&&(t=t.replace("iPhone",""),t=t.replace(",","."),(parseFloat(t)<10.6&&parseFloat(t)!=10.3||parseFloat(t)==14.6||parseFloat(t)==12.8)&&w.getItem(`__${e.name}_incompatible_dialog__`).then(a=>{a!=null||v.show({title:"Incompatible iPhone",body:`Please note that you're on an${i[p.DCDDeviceManager.device]}.
Some features in ${e.name} may behave in an unexpected manner.`,confirmText:"Don't show again",cancelText:"Close",onConfirm:()=>w.setItem(`__${e.name}_incompatible_dialog__`,"true")})}))}const E=window.enmity.modules.common.Components.General.Animated,[T,de]=k(S.byProps("transitionToGuild"),S.byProps("setString"));var ue=({manifest:e})=>{const t=B.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:u.ThemeColorMap.HEADER_PRIMARY,fontFamily:u.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:u.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),i=n.useRef(new E.Value(1)).current,a=()=>{E.spring(i,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},s=()=>{E.spring(i,{toValue:1,duration:250,useNativeDriver:!0}).start()},c=()=>{T.openURL("https://spin.rip/")},$={transform:[{scale:i}]};return n.createElement(n.Fragment,null,n.createElement(h,{style:t.container},n.createElement(b,{onPress:c,onPressIn:a,onPressOut:s},n.createElement(E.View,{style:[$]},n.createElement(z,{style:[t.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(h,{style:t.text_container},n.createElement(b,{onPress:()=>{T.openURL(e.sourceUrl)}},n.createElement(g,{style:[t.main_text,t.header]},e.name," ")),n.createElement(h,{style:{flexDirection:"row"}},n.createElement(g,{style:[t.main_text,t.sub_header]},"A plugin by"),n.createElement(b,{onPress:()=>{T.openURL("https://spin.rip/")}},n.createElement(g,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(h,{style:{flexDirection:"row"}},n.createElement(g,{style:[t.main_text,t.sub_header]},"Settings page by"),n.createElement(b,{onPress:()=>{T.openURL("https://github.com/acquitelol/")}},n.createElement(g,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},"Acquite <3"))),n.createElement(h,null,n.createElement(b,{style:{flexDirection:"row"},onPress:()=>{de.setString(`**${e.name}** v${e.version}`),P("plugin name and version")}},n.createElement(g,{style:[t.main_text,t.sub_header]},"Version:"),n.createElement(g,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[ge,U]=k(S.byProps("transitionToGuild"),S.byProps("setString"));var pe=({manifest:e,settings:t,hasToasts:i,section:a,commands:s})=>{const c=B.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:u.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:u.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),[$,Y]=n.useState(),[I,j]=n.useState();return n.createElement(n.Fragment,null,n.createElement(G,{onTouchStart:d=>{Y(d.nativeEvent.pageX),j(d.nativeEvent.pageY)},onTouchEnd:d=>{$-d.nativeEvent.pageX<-100&&I-d.nativeEvent.pageY<40&&I-d.nativeEvent.pageY>-40&&ne.pop()}},n.createElement(ue,{manifest:e}),a,s&&n.createElement(_,{title:"Plugin Commands"},s.map(d=>n.createElement(r,{label:`/${d.name}`,subLabel:d.description,leading:n.createElement(r.Icon,{style:c.icon,source:m.Settings.Commands}),trailing:r.Arrow,onPress:function(){U.setString(`/${d.name}`),P(`the command ${d.name}`)}}))),n.createElement(_,{title:"Utility"},i&&n.createElement(n.Fragment,null,n.createElement(r,{label:"Initialization Toasts",leading:n.createElement(r.Icon,{style:c.icon,source:m.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(L,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),y.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:m.Settings.Toasts.Settings})}})}),n.createElement(D,null)),n.createElement(r,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(r.Icon,{style:c.icon,source:m.Settings.Debug}),trailing:r.Arrow,onPress:async function(){U.setString(await ie(e.name,e.version,e.build)),P("plugin debug information")}}),n.createElement(D,null),n.createElement(r,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(r.Icon,{style:c.icon,source:m.Delete}),trailing:r.Arrow,onPress:async function(){await w.removeItem("device_list"),y.open({content:"Cleared device list storage.",source:m.Settings.Toasts.Settings})}})),n.createElement(_,{title:"Source"},n.createElement(r,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(r.Icon,{style:c.icon,source:m.Copy}),trailing:r.Arrow,onPress:()=>{le({manifest:e})}}),n.createElement(D,null),n.createElement(r,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(r.Icon,{style:c.icon,source:m.Open}),trailing:r.Arrow,onPress:()=>{ge.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(r,{style:c.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})))};const O=W("BTE"),we={...F,onStart(){async function e(){await ce(F)}try{C("_twitter","_type",!1)||x("_twitter","_type","fxtwitter"),O.before(te,"sendMessage",(t,i,a)=>{const s=i[1].content;!s.match(/http(s)?:\/\/twitter.com\/\w{4,15}\/status\/\d+/gim)||(i[1].content=s.replace(/http(s)?:\/\/twitter.com/gim,`https://${C("_twitter","_type",!1)}.com`))})}catch(t){console.log("[ BetterTwitterEmbeds Error ]",t)}e()},onStop(){O.unpatchAll()},patches:[],getSettingsPanel({settings:e}){return n.createElement(pe,{manifest:F,settings:e,hasToasts:!1,section:n.createElement(_,{title:"Plugin Settings"},n.createElement(r,{label:"Use vxtwitter.com instead of fxtwitter.com",leading:n.createElement(r.Icon,{source:m.Copy}),trailing:n.createElement(L,{value:e.getBoolean("_vxtwitter",!1),onValueChange:()=>{try{e.toggle("_vxtwitter",!1),e.getBoolean("_vxtwitter",!1)?x("_twitter","_type","vxtwitter"):x("_twitter","_type","fxtwitter"),y.open({content:`Switched to ${C("_twitter","_type",!1)}.`,source:m.Settings.Toasts.Settings})}catch(t){console.log("[ BetterTwitterEmbeds Error ]",t),y.open({content:"An error has occurred. Check debug logs for more info.",source:m.Failed})}}})})),commands:null})}};H(we);
