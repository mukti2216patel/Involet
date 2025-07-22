import React from 'react';

const fontOptions = [
  'Inter',
  'Roboto',
  'Montserrat',
  'Lato',
  'Poppins',
];

const logoOptions = [
  '/vite.svg',
  '/src/assets/react.svg',
  'https://ui-avatars.com/api/?name=Involet&background=3b82f6&color=fff&size=128',
];

const headerLayouts = [
  { label: 'Logo Left', value: 'left' },
  { label: 'Logo Right', value: 'right' },
];

function DesignInvoice() {
 
  const selectedColor = '#3b82f6';
  const accentColor = '#f59e42';
  const selectedFont = 'Inter';
  const fontSize = 16;
  const borderRadius = 'rounded-2xl';
  const selectedLogo = logoOptions[0];
  const headerLayout = 'left'; // or 'right'
  const footerMessage = 'This is a custom footer message. Thank you for your business!';

  // Mock data for invoice
  const sender = {
    company: 'Involet Solutions',
    address: '123 Main St, City, Country',
    email: 'info@involet.com',
    phone: '+1 234 567 8900',
  };
  const client = {
    name: 'John Doe',
    company: 'Acme Corp',
    address: '456 Client Ave, Metropolis',
    email: 'john.doe@acme.com',
    phone: '+1 987 654 3210',
  };
  const invoice = {
    number: 'INV-001',
    issueDate: '2024-06-01',
    dueDate: '2024-06-15',
    status: 'Paid',
    items: [
      { description: 'Web Design Services', qty: 1, price: 1000 },
      { description: 'Hosting (12 months)', qty: 1, price: 120 },
      { description: 'Domain Registration', qty: 1, price: 80 },
    ],
    tax: 120,
    discount: 0,
    notes: 'Thank you for your business! Payment is due within 14 days.',
    terms: 'Please make payment to the bank details provided. Late payments may incur a fee.',
  };
  const subtotal = invoice.items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const total = subtotal + invoice.tax - invoice.discount;

  return (
    <div className="w-full min-h-[80vh] p-6 flex flex-row items-start gap-8">
      {/* Design Panel - Left */}
      <div className="w-full max-w-xs bg-[#181e2a] border border-[#232a3a] rounded-2xl shadow-xl p-8 flex flex-col gap-6 sticky top-8">
        <h1 className="text-2xl font-bold text-white mb-2">Invoice Design</h1>
        {/* Color Picker (static) */}
        <div>
          <label className="block text-gray-300 font-medium mb-1">Primary Color</label>
          <div className="flex items-center gap-4">
            <input type="color" className="w-8 h-8 p-0 border-none bg-transparent cursor-pointer" value={selectedColor} readOnly />
            <span className="text-gray-400">{selectedColor}</span>
          </div>
        </div>
        {/* Accent Color Picker (static) */}
        <div>
          <label className="block text-gray-300 font-medium mb-1">Accent Color</label>
          <div className="flex items-center gap-4">
            <input type="color" className="w-8 h-8 p-0 border-none bg-transparent cursor-pointer" value={accentColor} readOnly />
            <span className="text-gray-400">{accentColor}</span>
          </div>
        </div>
        {/* Font Picker (static) */}
        <div>
          <label className="block text-gray-300 font-medium mb-1">Font Family</label>
          <select className="w-full px-4 py-2 rounded-lg bg-[#181e2a] text-white border border-[#232a3a] focus:ring-2 focus:ring-blue-500" value={selectedFont} readOnly>
            {fontOptions.map(font => (
              <option key={font} value={font} style={{ fontFamily: font }}>{font}</option>
            ))}
          </select>
        </div>
        {/* Font Size Picker (static) */}
        <div>
          <label className="block text-gray-300 font-medium mb-1">Font Size</label>
          <input type="range" min="12" max="22" value={fontSize} className="w-full" readOnly />
          <div className="text-gray-400 text-sm mt-1">{fontSize}px</div>
        </div>
        {/* Border Radius Selector (static) */}
        <div>
          <label className="block text-gray-300 font-medium mb-1">Border Radius</label>
          <select className="w-full px-4 py-2 rounded-lg bg-[#181e2a] text-white border border-[#232a3a]" value={borderRadius} readOnly>
            <option value="rounded-none">None</option>
            <option value="rounded-lg">Rounded</option>
            <option value="rounded-2xl">Extra Rounded</option>
          </select>
        </div>
        {/* Header Layout Selector (static) */}
        <div>
          <label className="block text-gray-300 font-medium mb-1">Header Layout</label>
          <div className="flex gap-3">
            {headerLayouts.map(layout => (
              <button key={layout.value} className={`px-3 py-2 rounded-lg border ${headerLayout === layout.value ? 'border-blue-400 bg-blue-500/20 text-blue-300' : 'border-[#232a3a] text-gray-300'} font-medium text-sm`} disabled>{layout.label}</button>
            ))}
          </div>
        </div>
        {/* Logo Picker (static) */}
        <div>
          <label className="block text-gray-300 font-medium mb-1">Logo</label>
          <div className="flex gap-3 items-center">
            {logoOptions.map((logo, idx) => (
              <div key={logo} className={`w-12 h-12 rounded-full border-2 ${selectedLogo === logo ? 'border-blue-400' : 'border-[#232a3a]'} flex items-center justify-center bg-white overflow-hidden`}>
                <img src={logo} alt={`Logo ${idx+1}`} className="w-10 h-10 object-contain" />
              </div>
            ))}
          </div>
        </div>
        {/* Footer Message Input (static) */}
        <div>
          <label className="block text-gray-300 font-medium mb-1">Footer Message</label>
          <textarea className="w-full px-4 py-2 rounded-lg bg-[#181e2a] text-white border border-[#232a3a]" value={footerMessage} rows={2} readOnly />
        </div>
        {/* Download PDF Button (static) */}
        <button className="w-full mt-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-bold shadow hover:from-blue-600 hover:to-cyan-500 transition-all duration-200">
          Download PDF
        </button>
        <button type="button" className="w-full mt-4 px-5 py-3 bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-xl font-bold shadow hover:from-green-600 hover:to-emerald-500 transition-all duration-200">
          Send / Save Invoice
        </button>
      </div>
      {/* Invoice Preview - Right */}
      <div className="flex-1 flex justify-center">
        <div className={`w-full max-w-3xl bg-white shadow-2xl border border-gray-200 p-0 overflow-hidden ${borderRadius}`} style={{ fontFamily: selectedFont, fontSize: fontSize }}>
          {/* Colored Header */}
          <div className={`flex justify-between items-center px-8 py-6`} style={{ background: selectedColor }}>
            {headerLayout === 'left' ? (
              <>
                <div className="flex items-center gap-4">
                  <img src={selectedLogo} alt="Logo" className="w-16 h-16 object-contain bg-white rounded-full p-2" />
                  <div className="text-2xl font-bold text-white tracking-wide">{sender.company}</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-extrabold text-white tracking-tight">INVOICE</div>
                  <div className="text-white text-base font-semibold">#{invoice.number}</div>
                </div>
              </>
            ) : (
              <>
                <div className="text-left">
                  <div className="text-3xl font-extrabold text-white tracking-tight">INVOICE</div>
                  <div className="text-white text-base font-semibold">#{invoice.number}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-white tracking-wide">{sender.company}</div>
                  <img src={selectedLogo} alt="Logo" className="w-16 h-16 object-contain bg-white rounded-full p-2" />
                </div>
              </>
            )}
          </div>
          {/* Invoice Meta */}
          <div className="flex flex-col md:flex-row justify-between gap-8 px-8 py-6 border-b border-gray-200 bg-gray-50">
            <div>
              <div className="font-semibold text-gray-700 mb-1">From:</div>
              <div className="text-gray-800 font-bold">{sender.company}</div>
              <div className="text-gray-500 text-sm">{sender.address}</div>
              <div className="text-gray-500 text-sm">{sender.email}</div>
              <div className="text-gray-500 text-sm">{sender.phone}</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-1">Bill To:</div>
              <div className="text-gray-800 font-bold">{client.name}</div>
              <div className="text-gray-500 text-sm">{client.company}</div>
              <div className="text-gray-500 text-sm">{client.address}</div>
              <div className="text-gray-500 text-sm">{client.email}</div>
              <div className="text-gray-500 text-sm">{client.phone}</div>
            </div>
            <div className="flex flex-col gap-1 min-w-[120px]">
              <div className="text-gray-700 text-sm">Issued: <span className="font-semibold">{invoice.issueDate}</span></div>
              <div className="text-gray-700 text-sm">Due: <span className="font-semibold">{invoice.dueDate}</span></div>
              <div className="mt-2"><span className={`px-3 py-1 text-xs font-semibold rounded-full border ${invoice.status === 'Paid' ? 'bg-green-100 text-green-600 border-green-200' : 'bg-yellow-100 text-yellow-600 border-yellow-200'}`}>{invoice.status}</span></div>
            </div>
          </div>
          {/* Items Table */}
          <div className="overflow-x-auto px-8 py-6">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr style={{ background: accentColor }}>
                  <th className="px-4 py-3 font-semibold text-white">Description</th>
                  <th className="px-4 py-3 font-semibold text-white">Qty</th>
                  <th className="px-4 py-3 font-semibold text-white">Unit Price</th>
                  <th className="px-4 py-3 font-semibold text-white">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    <td className="px-4 py-3 text-gray-700">{item.description}</td>
                    <td className="px-4 py-3 text-gray-700">{item.qty}</td>
                    <td className="px-4 py-3 text-gray-700">${item.price.toFixed(2)}</td>
                    <td className="px-4 py-3 text-gray-700">${(item.qty * item.price).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Totals Row (colored) */}
          <div className="flex flex-col items-end px-8 py-4" style={{ background: accentColor + '22' }}>
            <div className="flex gap-8">
              <div className="text-gray-700">Subtotal:</div>
              <div className="font-semibold text-gray-800">${subtotal.toFixed(2)}</div>
            </div>
            <div className="flex gap-8">
              <div className="text-gray-700">Tax:</div>
              <div className="font-semibold text-gray-800">${invoice.tax.toFixed(2)}</div>
            </div>
            <div className="flex gap-8">
              <div className="text-gray-700">Discount:</div>
              <div className="font-semibold text-gray-800">-${invoice.discount.toFixed(2)}</div>
            </div>
            <div className="flex gap-8 text-lg mt-2">
              <div className="font-bold text-gray-900">Total:</div>
              <div className="font-extrabold" style={{ color: accentColor }}>${total.toFixed(2)}</div>
            </div>
          </div>
          {/* Payment Terms & Notes */}
          <div className="px-8 py-4 border-t border-gray-200 bg-gray-50">
            <div className="mb-2">
              <div className="font-semibold text-gray-700 mb-1">Payment Terms:</div>
              <div className="text-gray-600 text-sm">{invoice.terms}</div>
            </div>
            <div className="mb-2">
              <div className="font-semibold text-gray-700 mb-1">Notes:</div>
              <div className="text-gray-600 text-sm">{invoice.notes}</div>
            </div>
            <div className="text-gray-400 text-xs text-right mt-4">{footerMessage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignInvoice; 