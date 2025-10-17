const Map = () => {
    return (
        <div className="w-full h-[398px] rounded-xl overflow-hidden ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.65322787261!2d85.24373135767756!3d27.708935957714655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1760509794860!5m2!1sen!2snp"
                width="100%"
                height="100%"
                title="Unique Agro Center and Rupak Vet Farma Location"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
    )
}
export default Map;