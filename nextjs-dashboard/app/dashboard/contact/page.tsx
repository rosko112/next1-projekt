import { lusitana } from '@/app/ui/fonts';

export default function ContactPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Contacts
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <div className="flex flex-col items-center justify-center h-40 bg-white rounded-xl shadow-sm">
          <span className="mb-2 text-gray-700 font-semibold text-lg">Phone</span>
          <a href="tel:041010414" className="text-blue-700 text-lg font-semibold text-center">
            041 010 414
          </a>
        </div>
        <div className="flex flex-col items-center justify-center h-40 bg-white rounded-xl shadow-sm">
          <span className="mb-2 text-gray-700 font-semibold text-lg">Email</span>
          <a href="mailto:aljazko-rosko@gemail.com" className="text-blue-700 text-lg font-semibold text-center">
            aljazko-rosko@gemail.com
          </a>
        </div>
        <div className="flex flex-col items-center justify-center h-40 bg-white rounded-xl shadow-sm">
          <span className="mb-2 text-gray-700 font-semibold text-lg">Address</span>
          <a
            href="https://www.google.com/maps/place/%C5%A0olski+center+Velenje/@46.3617497,15.1141546,18.29z/data=!4m6!3m5!1s0x476566d5a87c506f:0x96dc8aaac2424d48!8m2!3d46.3617381!4d15.1136129!16s%2Fg%2F1vnnh5q7?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="text-blue-700 text-lg font-semibold text-center">
            Trg mladosti 45
            <br />
            Velenje, 3320
            <br />
            Slovenia
          </a>
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm col-span-2 lg:col-span-3 mt-4">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Trg+mladosti+45,+Velenje,+Slovenia&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <form className="w-full bg-white p-8 rounded-xl shadow space-y-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}

