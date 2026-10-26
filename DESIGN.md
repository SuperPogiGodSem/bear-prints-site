# Bear Prints site direction

## Brief

Bear’s Personalized Printed Packaging is a Philippine supplier of custom branded food packaging. The site serves restaurants, cafés, food stalls, and small businesses. Its job is to explain packaging options and collect quote interest without presenting checkout or sending data to an unconfigured service. The supplied Bear Prints logo is the only confirmed business asset. Contact details, product specifications, prices, quantities, shipping, lead times, certifications, and customer stories remain unclaimed.

## Concept card

Idea: The brand travels with the order: printed surfaces turn a takeout wrap, cup, or box into a familiar hello from the food business.

Metaphor: A paper counter where packaging opens, folds, and carries a name outward.

Signature: The hero packaging composition settles into place as a cup and folded wrap, with the product illustrations lifting slightly on hover. CSS transforms keep the paper motif continuous from hero through product range and brand story.

Emotion: Warm, useful, and welcoming within the first few seconds.

Motion verb: Fold and settle.

Screenshot: The oversized headline beside a kraft-paper arch with a printed cup, a folded branded liner, and a small seal.

Anchor: Bear Prints supplies custom-printed food packaging, and its logo is a bear holding a drink. The fold and carry idea depends on the physical packaging and this supplied identity.

## Concept exploration

| Territory | Concept | Anchor | Signature | Originality / fit / feasibility / portability |
|---|---|---|---|---|
| Material | Printed sheets and folds turn an order into a moving brand touchpoint. | Food packaging and its printed surfaces. | Cup and liner fold into the hero composition; product illustrations answer with a paper lift. | 4 / 5 / 5 / 2 |
| Identity | Bear Prints acts like the friendly face on every package that leaves the counter. | Bear mascot and brand name. | Small mascot marks show up as seals across product illustrations. | 3 / 5 / 5 / 3 |
| Place / culture | A local food-stall counter stages the handoff between maker and customer. | Filipino food businesses and familiar takeaway foods. | Counter-menu index organizes wrappers and serving formats. | 3 / 4 / 4 / 3 |

Picked the printed-fold concept because it gives the full page a distinctive physical logic while keeping the small bear mark and practical quote task easy to read. The genericness test removed stock-photo food scenes, generic ecommerce controls, and an ornamental cream-and-serif treatment; the supplied mark, product-specific packaging drawings, bold grotesk type, and fold interaction ground the design in this business.

## Art direction

- Palette: paper ground `#F3EEE4`; light stock `#FAF7F0`; ink `#39291C`; muted ink `#685542`; kraft `#D5B88F`; orange print `#C96C38`; deep counter brown `#422B1B`.
- Type: Manrope 500–800 for display and strong product labels; DM Sans 400–700 for reading and UI. Google Fonts are progressive enhancement; Arial is the system fallback. Display tracking is negative and body text stays 16 px or larger.
- Grid: 12-column feeling on desktop with shared page gutters; six-column product catalog; four/two-column phone product layout. Main text aligns to the same outside gutter. Radius is limited to small 2–5 px corners and circular stamps.
- Rhythm: full-viewport hero, airy catalog and quote sections, inset split brand story, compact numbered process, dark full-width step sequence, quiet contact finale.
- Motion: one cubic-bezier family, short 200–300 ms utility feedback, 500–900 ms paper transitions. No continuous animation; motion is a quiet compositional settle, and rests when the visitor does. Reduced motion disables transitions and intro movement.

### Composition plan

```text
Header: [logo]                                  [nav] [quote]
Hero:   [headline + copy + actions]             [paper arch + cup + wrap]
Catalog:[section title]                         [short explanation]
        [large wrap] [snack sleeves]             [egg box]
        [cups]       [meal box / bowls / straws]
Why:    [folded branded paper composition]      [statement + benefits]
Steps:  [title]                                  [short explanation]
        [01 choose]        [02 share]            [03 confirm]
Quote:  [title + honest demo note]               [accessible form]
Contact:[large invitation]                       [confirmed links / placeholders]
Footer: [brand + note] [product links] [contact links]
404:    [bear mark] + empty paper field + home action
```

## Content assumptions and placeholders

- The exact product names and categories came from the user's brief. Availability, materials, sizes, print methods, minimums, pricing, delivery, and lead times are not asserted.
- The contact links visibly label official Facebook URL, phone, and email as owner-supplied placeholders. Replace both labels and link targets before launch.
- `https://bearprints.example` is a reserved example domain used in canonical, social, structured data, robots, and sitemap metadata. Replace with the real domain.
- The quote form is a validation/demo only. It does not transmit or store responses. Connect a backend or form provider before inviting real requests.
- Product art combines hand-drawn SVG mockups and customer-supplied cup and printed-paper photos. The supplied photos visibly contain other brand marks; they are shown as packaging examples and are not represented as Bear Prints' own brand. Confirm image permissions and current availability before launch.
- No reviews, credentials, client logos, quantitative claims, prices, production times, or shipping guarantees are included.

## Stack and stillness decision

Plain HTML, CSS, and vanilla JavaScript keep a small, brochure-style site fast and easy for the owner to edit. Native links handle navigation and no checkout or server function is implied. The idea rests still by design; hover and entry transitions provide restrained feedback without a decorative idle loop.
