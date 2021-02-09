import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, o as svg_element, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, p as set_style, l as insert_dev, m as append_dev, n as noop } from './client.4c5edba9.js';

/* src\routes\notionso.svelte generated by Svelte v3.31.1 */

const file = "src\\routes\\notionso.svelte";

function create_fragment(ctx) {
	let div3;
	let h1;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let div1;
	let div0;
	let svg;
	let path;
	let t4;
	let t5;
	let div2;
	let input;
	let t6;
	let button;
	let t7;
	let t8;
	let p1;
	let t9;
	let p2;
	let t10;
	let div4;
	let a;
	let t11;

	const block = {
		c: function create() {
			div3 = element("div");
			h1 = element("h1");
			t0 = text("All-in-one workspace");
			t1 = space();
			p0 = element("p");
			t2 = text("One tool for your whole team. Write, plan, and get organized.");
			t3 = space();
			div1 = element("div");
			div0 = element("div");
			svg = svg_element("svg");
			path = svg_element("path");
			t4 = text(" Download from App Store");
			t5 = space();
			div2 = element("div");
			input = element("input");
			t6 = space();
			button = element("button");
			t7 = text("Sign Up");
			t8 = space();
			p1 = element("p");
			t9 = text("For teams & individuals — web, mobile, Mac, Windows.");
			p2 = element("p");
			t10 = space();
			div4 = element("div");
			a = element("a");
			t11 = text("notion.so sitesinden alınmıştır");
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h1 = claim_element(div3_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "All-in-one workspace");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			p0 = claim_element(div3_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "One tool for your whole team. Write, plan, and get organized.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", {
				class: true,
				role: true,
				tabindex: true,
				style: true
			});

			var div0_nodes = children(div0);
			svg = claim_element(div0_nodes, "svg", { viewBox: true, class: true, style: true }, 1);
			var svg_nodes = children(svg);
			path = claim_element(svg_nodes, "path", { d: true }, 1);
			children(path).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			t4 = claim_text(div0_nodes, " Download from App Store");
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t5 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			input = claim_element(div2_nodes, "INPUT", {
				type: true,
				placeholder: true,
				class: true
			});

			t6 = claim_space(div2_nodes);
			button = claim_element(div2_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t7 = claim_text(button_nodes, "Sign Up");
			button_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t8 = claim_space(div3_nodes);
			p1 = claim_element(div3_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t9 = claim_text(p1_nodes, "For teams & individuals — web, mobile, Mac, Windows.");
			p1_nodes.forEach(detach_dev);
			p2 = claim_element(div3_nodes, "P", {});
			var p2_nodes = children(p2);
			p2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t10 = claim_space(nodes);
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			a = claim_element(div4_nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t11 = claim_text(a_nodes, "notion.so sitesinden alınmıştır");
			a_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "md:text-7xl text-5xl font-bold  text-center ");
			add_location(h1, file, 2, 4, 60);
			attr_dev(p0, "class", "text-gray-600 mt-4  text-xl leading-6 opacity-60 text-center");
			add_location(p0, file, 3, 4, 150);
			attr_dev(path, "d", "m150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929 0.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002 0.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-0.9 2.61-1.85 5.11-2.86 7.51zm-31.26-123.01c0 8.1021-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375-0.119-0.972-0.188-1.995-0.188-3.07 0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.3113 11.45-8.597 4.62-2.2516 8.99-3.4968 13.1-3.71 0.12 1.0831 0.17 2.1663 0.17 3.2409z");
			add_location(path, file, 5, 655, 982);
			attr_dev(svg, "viewBox", "0 0 170 170");
			attr_dev(svg, "class", "appleLogo");
			set_style(svg, "width", "16px");
			set_style(svg, "height", "16px");
			set_style(svg, "display", "block");
			set_style(svg, "fill", "currentcolor");
			set_style(svg, "flex-shrink", "0");
			set_style(svg, "backface-visibility", "hidden");
			set_style(svg, "margin-right", "6px");
			add_location(svg, file, 5, 475, 802);
			attr_dev(div0, "class", "");
			attr_dev(div0, "role", "button");
			attr_dev(div0, "tabindex", "0");
			set_style(div0, "user-select", "none");
			set_style(div0, "transition", "background 20ms ease-in 0s");
			set_style(div0, "cursor", "pointer");
			set_style(div0, "display", "inline-flex");
			set_style(div0, "align-items", "center");
			set_style(div0, "justify-content", "center");
			set_style(div0, "white-space", "nowrap");
			set_style(div0, "height", "36px");
			set_style(div0, "border-radius", "3px");
			set_style(div0, "color", "white");
			set_style(div0, "font-size", "14px");
			set_style(div0, "line-height", "1");
			set_style(div0, "padding-left", "12px");
			set_style(div0, "padding-right", "12px");
			set_style(div0, "font-weight", "500");
			set_style(div0, "background", "rgb(225, 98, 89)");
			set_style(div0, "border", "1px solid rgb(190, 86, 67)");
			set_style(div0, "box-shadow", "rgba(15, 15, 15, 0.1) 0px 1px 2px");
			add_location(div0, file, 5, 8, 335);
			attr_dev(div1, "class", "mt-4 sm:hidden");
			add_location(div1, file, 4, 4, 295);
			attr_dev(input, "type", "text");
			attr_dev(input, "placeholder", "Enter your email...");
			attr_dev(input, "class", "border rounded-md w-64 h-10 pl-2");
			add_location(input, file, 8, 8, 2179);
			attr_dev(button, "class", " bg-red-500 rounded-md  w-24 text-white font-medium  h-10");
			add_location(button, file, 9, 8, 2284);
			attr_dev(div2, "class", " flex-row  mt-4  sm:space-x-2 space-x-0 sm:flex hidden");
			add_location(div2, file, 7, 4, 2101);
			attr_dev(p1, "class", "text-gray-800 text-sm mt-2 sm:flex hidden opacity-50");
			add_location(p1, file, 11, 4, 2394);
			add_location(p2, file, 11, 120, 2510);
			attr_dev(div3, "class", "flex flex-col items-center break-words");
			add_location(div3, file, 0, 0, 0);
			attr_dev(a, "class", "mt-4 text-blue-600");
			attr_dev(a, "href", "https://www.notion.so/");
			add_location(a, file, 16, 4, 2572);
			attr_dev(div4, "class", "flex justify-center mt-4 ");
			add_location(div4, file, 15, 0, 2527);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, h1);
			append_dev(h1, t0);
			append_dev(div3, t1);
			append_dev(div3, p0);
			append_dev(p0, t2);
			append_dev(div3, t3);
			append_dev(div3, div1);
			append_dev(div1, div0);
			append_dev(div0, svg);
			append_dev(svg, path);
			append_dev(div0, t4);
			append_dev(div3, t5);
			append_dev(div3, div2);
			append_dev(div2, input);
			append_dev(div2, t6);
			append_dev(div2, button);
			append_dev(button, t7);
			append_dev(div3, t8);
			append_dev(div3, p1);
			append_dev(p1, t9);
			append_dev(div3, p2);
			insert_dev(target, t10, anchor);
			insert_dev(target, div4, anchor);
			append_dev(div4, a);
			append_dev(a, t11);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			if (detaching) detach_dev(t10);
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
	validate_slots("Notionso", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Notionso> was created with unknown prop '${key}'`);
	});

	return [];
}

class Notionso extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Notionso",
			options,
			id: create_fragment.name
		});
	}
}

export default Notionso;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aW9uc28uYmEyNjZjOWMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
