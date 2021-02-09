import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, o as svg_element, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.82112f9d.js';

/* src\routes\twitter-messages.svelte generated by Svelte v3.31.1 */

const file = "src\\routes\\twitter-messages.svelte";

function create_fragment(ctx) {
	let div4;
	let div0;
	let p0;
	let t0;
	let t1;
	let svg0;
	let g0;
	let path0;
	let t2;
	let div2;
	let div1;
	let button;
	let svg1;
	let g1;
	let path1;
	let t3;
	let input;
	let t4;
	let div3;
	let h2;
	let t5;
	let t6;
	let p1;
	let t7;

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			p0 = element("p");
			t0 = text("Mesajlar");
			t1 = space();
			svg0 = svg_element("svg");
			g0 = svg_element("g");
			path0 = svg_element("path");
			t2 = space();
			div2 = element("div");
			div1 = element("div");
			button = element("button");
			svg1 = svg_element("svg");
			g1 = svg_element("g");
			path1 = svg_element("path");
			t3 = space();
			input = element("input");
			t4 = space();
			div3 = element("div");
			h2 = element("h2");
			t5 = text("Mesaj gönder,mesaj al");
			t6 = space();
			p1 = element("p");
			t7 = text("Direkt Mesajlar, sen ve Twitter'daki diğer kişiler arasında gerçekleşen özel sohbetlerdir. Tweetleri, medyaları ve daha fazlasını paylaşabilirsin!");
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, "Mesajlar");
			p0_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			svg0 = claim_element(div0_nodes, "svg", { viewBox: true, class: true }, 1);
			var svg0_nodes = children(svg0);
			g0 = claim_element(svg0_nodes, "g", {}, 1);
			var g0_nodes = children(g0);
			path0 = claim_element(g0_nodes, "path", { d: true }, 1);
			children(path0).forEach(detach_dev);
			g0_nodes.forEach(detach_dev);
			svg0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			button = claim_element(div1_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			svg1 = claim_element(button_nodes, "svg", { viewBox: true, class: true }, 1);
			var svg1_nodes = children(svg1);
			g1 = claim_element(svg1_nodes, "g", {}, 1);
			var g1_nodes = children(g1);
			path1 = claim_element(g1_nodes, "path", { d: true }, 1);
			children(path1).forEach(detach_dev);
			g1_nodes.forEach(detach_dev);
			svg1_nodes.forEach(detach_dev);
			button_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);

			input = claim_element(div1_nodes, "INPUT", {
				type: true,
				name: true,
				id: true,
				placeholder: true,
				class: true
			});

			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t4 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h2 = claim_element(div3_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t5 = claim_text(h2_nodes, "Mesaj gönder,mesaj al");
			h2_nodes.forEach(detach_dev);
			t6 = claim_space(div3_nodes);
			p1 = claim_element(div3_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t7 = claim_text(p1_nodes, "Direkt Mesajlar, sen ve Twitter'daki diğer kişiler arasında gerçekleşen özel sohbetlerdir. Tweetleri, medyaları ve daha fazlasını paylaşabilirsin!");
			p1_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p0, "class", "text-xl font-extrabold");
			add_location(p0, file, 3, 8, 185);
			attr_dev(path0, "d", "M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z");
			add_location(path0, file, 4, 80, 313);
			add_location(g0, file, 4, 77, 310);
			attr_dev(svg0, "viewBox", "0 0 24 24");
			attr_dev(svg0, "class", "fill-current text-blue-600 w-6 h-6s");
			add_location(svg0, file, 4, 8, 241);
			attr_dev(div0, "class", "flex flex-row items-center p-4 border-b   justify-between h-12 w-screen max-w-md");
			add_location(div0, file, 2, 4, 81);
			attr_dev(path1, "d", "M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z");
			add_location(path1, file, 10, 87, 1434);
			add_location(g1, file, 10, 84, 1431);
			attr_dev(svg1, "viewBox", "0 0 24 24");
			attr_dev(svg1, "class", "fill-current text-gray-600 w-4 h-4");
			add_location(svg1, file, 10, 16, 1363);
			attr_dev(button, "type", "submit");
			attr_dev(button, "class", "p-2 outline-none focus:outline-none active:outline-none");
			add_location(button, file, 9, 12, 1259);
			attr_dev(input, "type", "search");
			attr_dev(input, "name", "search");
			attr_dev(input, "id", "search");
			attr_dev(input, "placeholder", "Kişi ve grup ara");
			attr_dev(input, "class", "bg-gray-200 ml-4 appearance-none w-full outline-none focus:outline-none active:outline-none");
			add_location(input, file, 12, 12, 1786);
			attr_dev(div1, "class", "flex justify-between items-center relative w-80 h-10 pl-3 pr-2 bg-gray-200  border-gray-200 rounded-full border ");
			add_location(div1, file, 8, 8, 1119);
			attr_dev(div2, "class", "p-2 h-16 w-screen max-w-md border-b");
			add_location(div2, file, 7, 4, 1060);
			attr_dev(h2, "class", "text-lg font-bold");
			add_location(h2, file, 16, 4, 2064);
			attr_dev(p1, "class", "text-center text-gray-400 p-4");
			add_location(p1, file, 17, 4, 2126);
			attr_dev(div3, "class", "flex flex-col items-center mt-8 break-words");
			add_location(div3, file, 15, 4, 2001);
			attr_dev(div4, "class", "flex flex-col mx-auto w-screen max-w-md h-screen border");
			add_location(div4, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			append_dev(div0, p0);
			append_dev(p0, t0);
			append_dev(div0, t1);
			append_dev(div0, svg0);
			append_dev(svg0, g0);
			append_dev(g0, path0);
			append_dev(div4, t2);
			append_dev(div4, div2);
			append_dev(div2, div1);
			append_dev(div1, button);
			append_dev(button, svg1);
			append_dev(svg1, g1);
			append_dev(g1, path1);
			append_dev(div1, t3);
			append_dev(div1, input);
			append_dev(div4, t4);
			append_dev(div4, div3);
			append_dev(div3, h2);
			append_dev(h2, t5);
			append_dev(div3, t6);
			append_dev(div3, p1);
			append_dev(p1, t7);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpdHRlci1tZXNzYWdlcy44MGE0ZWUyMy5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
