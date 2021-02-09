import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, o as svg_element, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.38178c8e.js';

/* src\routes\twitter-messages.svelte generated by Svelte v3.31.1 */

const file = "src\\routes\\twitter-messages.svelte";

function create_fragment(ctx) {
	let div3;
	let div0;
	let p;
	let t0;
	let t1;
	let svg0;
	let g;
	let path0;
	let t2;
	let div2;
	let div1;
	let input;
	let t3;
	let button;
	let svg1;
	let path1;

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			p = element("p");
			t0 = text("Mesajlar");
			t1 = space();
			svg0 = svg_element("svg");
			g = svg_element("g");
			path0 = svg_element("path");
			t2 = space();
			div2 = element("div");
			div1 = element("div");
			input = element("input");
			t3 = space();
			button = element("button");
			svg1 = svg_element("svg");
			path1 = svg_element("path");
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, "Mesajlar");
			p_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			svg0 = claim_element(div0_nodes, "svg", { viewBox: true, class: true }, 1);
			var svg0_nodes = children(svg0);
			g = claim_element(svg0_nodes, "g", {}, 1);
			var g_nodes = children(g);
			path0 = claim_element(g_nodes, "path", { d: true }, 1);
			children(path0).forEach(detach_dev);
			g_nodes.forEach(detach_dev);
			svg0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			input = claim_element(div1_nodes, "INPUT", {
				type: true,
				name: true,
				id: true,
				placeholder: true,
				class: true
			});

			t3 = claim_space(div1_nodes);
			button = claim_element(div1_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);

			svg1 = claim_element(
				button_nodes,
				"svg",
				{
					fill: true,
					stroke: true,
					"stroke-linecap": true,
					"stroke-linejoin": true,
					"stroke-width": true,
					viewBox: true,
					class: true
				},
				1
			);

			var svg1_nodes = children(svg1);
			path1 = claim_element(svg1_nodes, "path", { d: true }, 1);
			children(path1).forEach(detach_dev);
			svg1_nodes.forEach(detach_dev);
			button_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "text-xl font-extrabold");
			add_location(p, file, 3, 8, 177);
			attr_dev(path0, "d", "M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z");
			add_location(path0, file, 4, 80, 305);
			add_location(g, file, 4, 77, 302);
			attr_dev(svg0, "viewBox", "0 0 24 24");
			attr_dev(svg0, "class", "fill-current text-blue-600 w-6 h-6s");
			add_location(svg0, file, 4, 8, 233);
			attr_dev(div0, "class", "flex flex-row items-center p-4 border-b border-l border-r justify-between h-12 w-screen max-w-lg");
			add_location(div0, file, 2, 4, 57);
			attr_dev(input, "type", "search");
			attr_dev(input, "name", "search");
			attr_dev(input, "id", "search");
			attr_dev(input, "placeholder", "What do you want to learn?");
			attr_dev(input, "class", "appearance-none w-full outline-none focus:outline-none active:outline-none");
			add_location(input, file, 9, 12, 1225);
			attr_dev(path1, "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z");
			add_location(path1, file, 14, 20, 1729);
			attr_dev(svg1, "fill", "none");
			attr_dev(svg1, "stroke", "currentColor");
			attr_dev(svg1, "stroke-linecap", "round");
			attr_dev(svg1, "stroke-linejoin", "round");
			attr_dev(svg1, "stroke-width", "2");
			attr_dev(svg1, "viewBox", "0 0 24 24");
			attr_dev(svg1, "class", "w-5 h-5 text-gray-500");
			add_location(svg1, file, 12, 16, 1533);
			attr_dev(button, "type", "submit");
			attr_dev(button, "class", "ml-1 outline-none focus:outline-none active:outline-none");
			add_location(button, file, 11, 12, 1428);
			attr_dev(div1, "class", "w-screen max-w-lg h-10 pl-3 pr-2 bg-white border-gray-400 rounded border  flex justify-between items-center relative");
			add_location(div1, file, 8, 8, 1081);
			attr_dev(div2, "class", "mt-4 ");
			add_location(div2, file, 7, 4, 1052);
			attr_dev(div3, "class", "flex flex-col items-center mt-4");
			add_location(div3, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			append_dev(div0, p);
			append_dev(p, t0);
			append_dev(div0, t1);
			append_dev(div0, svg0);
			append_dev(svg0, g);
			append_dev(g, path0);
			append_dev(div3, t2);
			append_dev(div3, div2);
			append_dev(div2, div1);
			append_dev(div1, input);
			append_dev(div1, t3);
			append_dev(div1, button);
			append_dev(button, svg1);
			append_dev(svg1, path1);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Twitter_messages", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Twitter_messages> was created with unknown prop '${key}'`);
	});

	return [];
}

class Twitter_messages extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Twitter_messages",
			options,
			id: create_fragment.name
		});
	}
}

export default Twitter_messages;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpdHRlci1tZXNzYWdlcy5iNmZjNWUyNy5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
