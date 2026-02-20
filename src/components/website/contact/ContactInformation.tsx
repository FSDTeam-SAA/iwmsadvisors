import { Mail, MapPin, Phone } from "lucide-react";

const ContactInformation = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Map */}
          <div className="relative h-64 overflow-hidden rounded-md md:h-80 group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.585108398418!2d-81.51268402340331!3d41.45934529148427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88310240d436e76d%3A0x6b2e3e5d0a6a3b0!2s26250%20Commerce%20Park%20Rd%2C%20Beachwood%2C%20OH%2044122%2C%20USA!5e0!3m2!1sen!2sbd!4v1707960000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full transition-all duration-300 group-hover:scale-105"
            />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Contact Information
            </h2>
            <p className="mt-2 text-base text-slate-600">
              For all other ways to reach us, including email, phone, and
              answers you need quickly and reliably.
            </p>

            <div className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#086646]/10 text-[#086646] flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Email
                  </h3>
                  <p className="mt-1 text-base text-slate-600">
                    info@iwmsadvisors.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#086646]/10 text-[#086646] flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Phone
                  </h3>
                  <p className="mt-1 text-base text-slate-600">
                    +1 (555) 123-4505
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#086646]/10 text-[#086646] flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Address
                  </h3>
                  <p className="mt-1 text-base text-slate-600">
                    26250 Commerce Park Rd, Cleveland, OH 44122
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
