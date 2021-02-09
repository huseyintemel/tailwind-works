import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, h as children, j as claim_text, b as detach_dev, c as claim_space, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, o as noop } from './client.5e7a89b0.js';

/* src\routes\airtable.svelte generated by Svelte v3.31.1 */

const file = "src\\routes\\airtable.svelte";

function create_fragment(ctx) {
	let div2;
	let div0;
	let video;
	let source0;
	let source0_src_value;
	let source1;
	let source1_src_value;
	let t0;
	let t1;
	let div1;
	let h2;
	let t2;
	let t3;
	let p;
	let t4;
	let t5;
	let button;
	let t6;
	let t7;
	let div3;
	let a;
	let t8;

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			video = element("video");
			source0 = element("source");
			source1 = element("source");
			t0 = text("\r\n\t\tSorry, your browser doesn’t support embedded videos.");
			t1 = space();
			div1 = element("div");
			h2 = element("h2");
			t2 = text("Get started in a snap.");
			t3 = space();
			p = element("p");
			t4 = text("From day one, your team will love the familiarity of a spreadsheet, and the power of a database.");
			t5 = space();
			button = element("button");
			t6 = text("Explore product");
			t7 = space();
			div3 = element("div");
			a = element("a");
			t8 = text("airtable.com sitesinden alınmıştır");
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			video = claim_element(div0_nodes, "VIDEO", {
				class: true,
				autoplay: true,
				loop: true,
				playsinline: true,
				preload: true,
				muted: true,
				width: true,
				__idm_id__: true
			});

			var video_nodes = children(video);
			source0 = claim_element(video_nodes, "SOURCE", { src: true, type: true });
			source1 = claim_element(video_nodes, "SOURCE", { src: true, type: true });
			t0 = claim_text(video_nodes, "\r\n\t\tSorry, your browser doesn’t support embedded videos.");
			video_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h2 = claim_element(div1_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t2 = claim_text(h2_nodes, "Get started in a snap.");
			h2_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t4 = claim_text(p_nodes, "From day one, your team will love the familiarity of a spreadsheet, and the power of a database.");
			p_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			button = claim_element(div1_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t6 = claim_text(button_nodes, "Explore product");
			button_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			a = claim_element(div3_nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t8 = claim_text(a_nodes, "airtable.com sitesinden alınmıştır");
			a_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (source0.src !== (source0_src_value = "https://static.airtable.com/product_videos/content_calendar.mp4")) attr_dev(source0, "src", source0_src_value);
			attr_dev(source0, "type", "video/mp4");
			add_location(source0, file, 3, 2, 250);
			if (source1.src !== (source1_src_value = "https://static.airtable.com/product_videos/content_calendar.webm")) attr_dev(source1, "src", source1_src_value);
			attr_dev(source1, "type", "video/webm");
			add_location(source1, file, 4, 2, 351);
			attr_dev(video, "class", "rounded-lg mt-3");
			video.autoplay = "";
			video.loop = "";
			video.playsInline = "";
			attr_dev(video, "preload", "auto");
			video.muted = "";
			attr_dev(video, "width", "100%");
			attr_dev(video, "__idm_id__", "38686721");
			add_location(video, file, 2, 2, 121);
			attr_dev(div0, "class", "md:max-w-2xl ml-12  max-w-xl flex-shrink-0");
			add_location(div0, file, 1, 1, 61);
			attr_dev(h2, "class", "text-blue-500  font-bold break-words lg:text-5xl md:text-4xl text-3xl");
			add_location(h2, file, 9, 2, 616);
			attr_dev(p, "class", "text-gray-600 font-medium opacity-70 text-xl");
			add_location(p, file, 10, 2, 729);
			attr_dev(button, "class", "bg-white rounded-full items-center w-48 text-blue-500 border-blue-500 border-2 font-normal text-lg h-10");
			add_location(button, file, 11, 2, 889);
			attr_dev(div1, "class", "flex flex-col md:max-w-2xl md:mt-0 mt-4 space-y-4 max-w-xl ml-12");
			add_location(div1, file, 8, 3, 534);
			attr_dev(div2, "class", "flex  md:flex-row flex-col p-8   max-w-6xl ");
			add_location(div2, file, 0, 0, 0);
			attr_dev(a, "class", "mt-4 text-blue-600");
			attr_dev(a, "href", "https://airtable.com/");
			add_location(a, file, 16, 1, 1096);
			attr_dev(div3, "class", "flex justify-center mt-4 ");
			add_location(div3, file, 15, 0, 1054);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, video);
			append_dev(video, source0);
			append_dev(video, source1);
			append_dev(video, t0);
			append_dev(div2, t1);
			append_dev(div2, div1);
			append_dev(div1, h2);
			append_dev(h2, t2);
			append_dev(div1, t3);
			append_dev(div1, p);
			append_dev(p, t4);
			append_dev(div1, t5);
			append_dev(div1, button);
			append_dev(button, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, a);
			append_dev(a, t8);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			if (detaching) detach_dev(t7);
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
	validate_slots("Airtable", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Airtable> was created with unknown prop '${key}'`);
	});

	return [];
}

class Airtable extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Airtable",
			options,
			id: create_fragment.name
		});
	}
}

export default Airtable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlydGFibGUuZGJiODBlZDUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
