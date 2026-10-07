const cartCount = document.querySelector('#cart-count');
let itemCount = 0;

const showAllProductsButton = document.querySelector('#show-all-products');
const hideProductsButton = document.querySelector('#hide-products');
const additionalProducts = [
  ['Wireless Earbuds', 'Clear sound in a pocket-sized case.', '🎶'],
  ['Tablet Sleeve', 'Cushioned protection for your tablet.', '📔'],
  ['Everyday Phone Case', 'A slim layer of everyday protection.', '📱'],
  ['Foldable Laptop Stand', 'A better angle for your workspace.', '💻'],
  ['Precision Mouse', 'Smooth control for work and play.', '🖱️'],
  ['Compact Keyboard', 'A clean setup with a satisfying feel.', '⌨️'],
  ['HD Webcam', 'Bring a clearer view to every call.', '📹'],
  ['Multiport USB Hub', 'Keep all your connections together.', '🔌'],
  ['Screen Cleaning Kit', 'A streak-free refresh for your devices.', '🧽'],
  ['Smart Plug', 'Make everyday appliances a little smarter.', '🔋'],
  ['Handcrafted Ceramic Vase', 'Give fresh stems a lovely home.', '🏺'],
  ['Gallery Picture Frame', 'Show off a favorite little moment.', '🖼️'],
  ['Modern Wall Clock', 'A timeless accent for any room.', '🕰️'],
  ['Linen Table Runner', 'An easy finish for your table.', '🟨'],
  ['Wood Serving Tray', 'Carry a little something with style.', '🪵'],
  ['Glass Tumbler Set', 'Simple glasses for everyday sipping.', '🥛'],
  ['Loose-Leaf Tea Infuser', 'Steep a slower, calmer cup.', '🫖'],
  ['Kitchen Spice Set', 'Bring a little extra flavor to dinner.', '🧂'],
  ['Insulated Lunch Bag', 'Pack lunch and keep it fresh.', '🍱'],
  ['Bamboo Cutting Board', 'A sturdy staple for meal prep.', '🥕'],
  ['Plush Bath Towel Set', 'Wrap up in soft, absorbent comfort.', '🛁'],
  ['Cotton Lounge Robe', 'An extra-cozy layer for home.', '🥼'],
  ['Cloud-Soft Slippers', 'Comfort for those at-home steps.', '🥿'],
  ['Silk Sleep Mask', 'Settle into a darker, quieter night.', '😴'],
  ['Pillowcase Pair', 'A fresh, smooth touch for your bed.', '🛏️'],
  ['Bedside Organizer', 'Keep nighttime essentials close.', '🗂️'],
  ['Woven Laundry Hamper', 'A tidy place for laundry day.', '🧺'],
  ['Round Vanity Mirror', 'A polished detail for your morning routine.', '🪞'],
  ['Travel Jewelry Box', 'Keep small treasures neatly stored.', '💍'],
  ['Makeup Pouch', 'A handy home for daily favorites.', '💄'],
  ['Grippy Yoga Mat', 'Find your balance, one pose at a time.', '🧘'],
  ['Resistance Band Set', 'A compact kit for at-home workouts.', '🏋️'],
  ['Speed Jump Rope', 'An easy way to get moving anywhere.', '➰'],
  ['Lightweight Gym Duffel', 'Room for your training-day essentials.', '🎒'],
  ['Weekend Sports Cap', 'A comfortable classic for sunny days.', '🧢'],
  ['Stainless Water Flask', 'Keep your favorite drink close by.', '🚰'],
  ['Running Belt', 'Carry the little things hands-free.', '🏃'],
  ['Recovery Foam Roller', 'A relaxing finish after a long session.', '🟢'],
  ['Training Glove Pair', 'A secure grip for your next workout.', '🥊'],
  ['Everyday Ankle Socks', 'Soft essentials for busy feet.', '🧦'],
  ['Memory Foam Travel Pillow', 'A softer landing on long journeys.', '✈️'],
  ['Packing Cube Set', 'Make more room in your suitcase.', '🧳'],
  ['Leather Luggage Tag', 'Spot your suitcase at a glance.', '🏷️'],
  ['Passport Cover', 'Keep travel documents together.', '🛂'],
  ['Hanging Toiletry Bag', 'Keep travel-size essentials organized.', '🧴'],
  ['Compact Rain Umbrella', 'A little cover when clouds roll in.', '☂️'],
  ['Market Tote', 'A reusable carry-all for every errand.', '🛍️'],
  ['Brass Keychain', 'A small polished detail for your keys.', '🔑'],
  ['Slim Card Holder', 'Carry the cards you reach for most.', '💳'],
  ['Portable Desk Fan', 'A gentle breeze for your workspace.', '🪭'],
  ['Wood Desk Organizer', 'Give pens and notes a proper place.', '🗃️'],
  ['Pastel Sticky Notes', 'Leave yourself a bright little reminder.', '📝'],
  ['Colored Pencil Set', 'Add a splash of color to your ideas.', '🖍️'],
  ['Artist Sketchbook', 'A blank page for whatever comes next.', '🎨'],
  ['Stainless Ruler Set', 'Measure twice and make it neat.', '📏'],
  ['Padded Laptop Backpack', 'Carry your workday essentials in comfort.', '🎒'],
  ['Flexible Cable Clips', 'Keep charging cables from wandering.', '🧷'],
  ['Bamboo Monitor Riser', 'Lift your screen and clear your desk.', '🖥️'],
  ['Focus Timer', 'Make space for a little focused time.', '⏱️'],
  ['Clip-On Book Light', 'Keep reading after the sun goes down.', '🔦'],
  ['Adjustable Dog Leash', 'A comfortable lead for daily walks.', '🐕'],
  ['Playful Cat Toy', 'A new favorite for curious paws.', '🐈'],
  ['Ceramic Pet Bowl', 'A simple upgrade for mealtime.', '🐾'],
  ['Garden Plant Mister', 'A fine mist for leafy friends.', '🌱'],
  ['Durable Garden Gloves', 'Keep hands comfortable in the garden.', '🧤'],
];
let additionalProductsRendered = false;

const revealAllProducts = () => {
  const productGrid = document.querySelector('.product-grid');
  if (!additionalProductsRendered && productGrid) {
    additionalProducts.forEach(([name, description, icon]) => {
      const card = document.createElement('article');
      card.className = 'product-card';

      const image = document.createElement('div');
      image.className = 'product-image';
      image.textContent = icon;

      const title = document.createElement('h3');
      title.textContent = name;

      const details = document.createElement('p');
      details.textContent = description;

      const addButton = document.createElement('button');
      addButton.className = 'text-button add-to-bag';
      addButton.type = 'button';
      addButton.dataset.product = name;
      addButton.textContent = 'Add to bag +';

      card.append(image, title, details, addButton);
      productGrid.append(card);
    });
    additionalProductsRendered = true;
  }
  document.querySelectorAll('.product-card[hidden]').forEach((product) => {
    product.hidden = false;
  });
  if (showAllProductsButton) {
    showAllProductsButton.setAttribute('aria-expanded', 'true');
    showAllProductsButton.textContent = 'Showing all 90 products';
    showAllProductsButton.disabled = true;
  }
  if (hideProductsButton) hideProductsButton.hidden = false;
};

const hideExtraProducts = () => {
  document.querySelectorAll('.product-card:nth-child(n + 4)').forEach((product) => {
    product.hidden = true;
  });
  if (showAllProductsButton) {
    showAllProductsButton.setAttribute('aria-expanded', 'false');
    showAllProductsButton.textContent = 'Show all 90 products';
    showAllProductsButton.disabled = false;
  }
  if (hideProductsButton) hideProductsButton.hidden = true;
  document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

document.querySelector('#shop-now-button')?.addEventListener('click', revealAllProducts);
showAllProductsButton?.addEventListener('click', revealAllProducts);
hideProductsButton?.addEventListener('click', hideExtraProducts);

const signinDialog = document.querySelector('#signin-dialog');
const signinForm = document.querySelector('#signin-form');

document.querySelector('#signin-button')?.addEventListener('click', () => {
  signinDialog?.showModal();
  document.querySelector('#signin-username')?.focus();
});

document.querySelector('.signin-close')?.addEventListener('click', () => {
  signinDialog?.close();
});

signinForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#signin-status').textContent = 'Sign-in is not connected yet.';
});

document.querySelector('.product-grid')?.addEventListener('click', (event) => {
  const button = event.target.closest('.add-to-bag');
  if (!button) return;

  itemCount += 1;
  cartCount.textContent = itemCount;
  button.innerHTML = 'Added to bag <span>✓</span>';
  button.setAttribute('aria-label', `${button.dataset.product} added to bag`);
  window.setTimeout(() => {
    button.innerHTML = 'Add to bag <span>+</span>';
  }, 1800);
});

const contactForm = document.querySelector('#contact-form');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent(`DWRICK message from ${data.get('name')}`);
  const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`);
  window.location.href = `mailto:hello@dwrick.com?subject=${subject}&body=${body}`;
  document.querySelector('#form-status').textContent = 'Your email app is ready to send this message.';
  form.reset();
});
