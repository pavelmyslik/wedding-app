'use client';
import { useState } from 'react';

export default function RsvpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    attendance?: string;
  }>({});
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const validateForm = (formData: FormData): boolean => {
    const newErrors: { name?: string; attendance?: string } = {};

    const name = formData.get('name') as string;
    const attendance = formData.get('attendance') as string;

    if (!name || name.trim() === '') {
      newErrors.name = 'Prosím vyplňte své jméno';
    }

    if (!attendance) {
      newErrors.attendance = 'Prosím vyberte, zda se zúčastníte';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);

    if (!validateForm(formData)) {
      setIsSubmitting(false);
      return;
    }

    const data = {
      name: formData.get('name'),
      attendance: formData.get('attendance') === 'yes',
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Nastala chyba při odesílání formuláře.');
      }

      setSubmitStatus({
        success: true,
        message: 'Děkujeme za vaši odpověď!'
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: (error as Error).message || 'Nastala chyba při odesílání formuláře.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section className="bg-[#F7F5F2] py-20 px-4 text-[#222222] font-serif">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#D4B083] mb-2">Potvrzení účasti</h2>
          <div className="w-16 h-0.5 bg-[#D4B083] mx-auto mb-8 rounded" />
          <p className="mb-10 text-base">
            Budeme moc rádi, když s námi oslavíte náš velký den! <br />
            Prosíme o vyplnění následujícího RSVP formuláře, abychom mohli vše co nejlépe připravit.
          </p>

          {submitStatus.message && (
              <div className={`mb-6 p-4 rounded ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitStatus.message}
              </div>
          )}

          <form className="space-y-6 text-left" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="block mb-1 text-sm text-[#D4B083] font-medium">
                Vaše jméno <span className="text-red-500">*</span>
              </label>
              <input
                  type="text"
                  name="name"
                  className={`w-full border ${errors.name ? 'border-red-500' : 'border-[#D4B083]/40'} rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4B083] bg-white`}
                  required
              />
              {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm text-[#D4B083] font-medium">
                Zúčastníte se? <span className="text-red-500">*</span>
              </label>
              <select
                  name="attendance"
                  className={`w-full border ${errors.attendance ? 'border-red-500' : 'border-[#D4B083]/40'} rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#D4B083]`}
                  required
              >
                <option value="">-- Vyberte --</option>
                <option value="yes">Ano, s radostí přijdu</option>
                <option value="no">Bohužel se nezúčastním</option>
              </select>
              {errors.attendance && (
                  <p className="mt-1 text-sm text-red-500">{errors.attendance}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm text-[#D4B083] font-medium">
                Zpráva pro novomanžele <span className="text-gray-400">(nepovinné)</span>
              </label>
              <textarea
                  name="message"
                  rows={4}
                  className="w-full border border-[#D4B083]/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4B083] bg-white"
                  placeholder="Např. máme dietní omezení, vezmeme s sebou děti atd."
              />
            </div>

            <div className="text-center pt-4">
              <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#D4B083] text-white px-6 py-2 rounded-md hover:bg-[#c8a76f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Odesílám...' : 'Odeslat RSVP'}
              </button>
            </div>
          </form>
        </div>
      </section>
  );
}
