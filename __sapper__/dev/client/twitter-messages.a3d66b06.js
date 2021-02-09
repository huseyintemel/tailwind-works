import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, o as svg_element, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.2da7817f.js';

/* src\routes\twitter-messages.svelte generated by Svelte v3.31.1 */

const file = "src\\routes\\twitter-messages.svelte";

function create_fragment(ctx) {
	let div1;
	let div0;
	let p;
	let t0;
	let t1;
	let svg;
	let g;
	let path;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			p = element("p");
			t0 = text("Mesajlar");
			t1 = space();
			svg = svg_element("svg");
			g = svg_element("g");
			path = svg_element("path");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p = claim_element(div0_nodes, "P", {});
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, "Mesajlar");
			p_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			svg = claim_element(div0_nodes, "svg", { viewBox: true, class: true }, 1);
			var svg_nodes = children(svg);
			g = claim_element(svg_nodes, "g", {}, 1);
			var g_nodes = children(g);
			path = claim_element(g_nodes, "path", { d: true }, 1);
			children(path).forEach(detach_dev);
			g_nodes.forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p, file, 3, 8, 181);
			attr_dev(path, "d", "M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z");
			add_location(path, file, 4, 79, 277);
			add_location(g, file, 4, 76, 274);
			attr_dev(svg, "viewBox", "0 0 24 24");
			attr_dev(svg, "class", "fill-current text-blue-600 w-8 h-8");
			add_location(svg, file, 4, 8, 206);
			attr_dev(div0, "class", "flex flex-row items-center p-4 border-b border-l-2 border-r-2 justify-between h-12 w-screen max-w-lg");
			add_location(div0, file, 2, 4, 57);
			attr_dev(div1, "class", "flex flex-col items-center mt-4");
			add_location(div1, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, p);
			append_dev(p, t0);
			append_dev(div0, t1);
			append_dev(div0, svg);
			append_dev(svg, g);
			append_dev(g, path);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpdHRlci1tZXNzYWdlcy5hM2Q2NmIwNi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
