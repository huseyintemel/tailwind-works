<script>
    import TwitterSettingsDetailItem from "../components/TwitterSettingsDetailItem.svelte";
    import TwitterSettingsItem from "../components/TwitterSettingsItem.svelte";

</script>
<div class="flex flex-col mx-auto h-screen border max-w-5xl">
    <div class="flex flex-row">
        <div class="flex-col w-1/2 md:flex hidden">
            <p class="font-sans p-4 font-extrabold">Ayarlar</p>
            <TwitterSettingsItem selected={true} settingName={"Hesabın"} />
            <TwitterSettingsItem settingName={"Güvenlik ve hesap erişimi"} />
            <TwitterSettingsItem settingName={"Gizlilik ve güvenlik"} />
            <TwitterSettingsItem settingName={"Bildirimler"} />
            <TwitterSettingsItem settingName={"Erişilebilirlik, ekran ve diller"} />
            <TwitterSettingsItem settingName={"Ek kaynaklar"} />

        </div>

        <div class="flex flex-col h-screen border">
            <p class="font-sans p-4 border-b font-extrabold">Hesabın</p>
            <div class="flex flex-row  justify-between items-center px-4">
                <p class="font-sans py-2 break-words text-xs text-gray-600">Hesabın hakkındaki bilgileri gör, verilerinin arşivini indir veya hesap devre dışı bırakma seçeneklerin hakkında bilgi edin.</p>
            </div>
            <TwitterSettingsDetailItem icon={"account"}  setting={"Hesap Bilgileri"} settingDetail={"Telefon numaran ve e-posta adresin gibi hesap bilgilerini gör."} />
            <TwitterSettingsDetailItem icon={"password"}  setting={"Şifreni Değiştir"} settingDetail={"İstediğin zaman şifreni değiştir."} settingName={"Hesabın"} />
            <TwitterSettingsDetailItem icon={"archive"}  setting={"Verilerinin bir arşivini indir"} settingDetail={"Hesabın için saklanan bilgi türü hakkında bilgi edin."} />
            <TwitterSettingsDetailItem icon={"deck"}  setting={"TweetDeck’in Ekibi"} settingDetail={"TweetDeck’in Ekiplerini kullanarak herhangi birini bu hesaptan Tweetlemeye davet et."} />
            <TwitterSettingsDetailItem icon={"heart"}  setting={"Hesabını devre dışı bırak"} settingDetail={"Hesabınızı nasıl devre dışı bırakacağını öğren."} />

        </div>    
    </div>

</div>