const DS = window.PattersonCompaniesDesignSystem_3534f9 || {};
const { Button, IconButton, Icon, Badge, Stat, Card, Input, Select, Checkbox, Radio, Switch, Alert, Tabs } = DS;
const { useState } = React;

function Sec({ id, title, note, children }) {
  return (
    <section className="ks-sec" id={id}>
      <h2>{title}</h2>
      {note && <p className="body">{note}</p>}
      {children}
    </section>
  );
}

function Blk({ title, code, tone, layout, children }) {
  return (
    <div className="blk">
      <div className="blk-h"><b>{title}</b>{code && <span>{code}</span>}</div>
      <div className={'blk-b' + (tone ? ' ' + tone : '') + (layout ? ' ' + layout : '')}>{children}</div>
    </div>
  );
}

function Labelled({ label, children }) {
  return <div className="stk"><span className="lbl">{label}</span>{children}</div>;
}

/* ---------------------------------------------------------------- Core */

function ButtonSec() {
  return (
    <Sec id="buttons" title="Button"
      note="Production geometry: 5px radius, 15px/30px padding, 15px/600 label. Primary and secondary are the two verified Patterson buttons — hover them to see the real states. Everything else is a system addition.">
      <Blk title="Verified variants" code='variant="primary" | "secondary"'>
        <Labelled label="primary → #315D83"><Button>Explore solutions</Button></Labelled>
        <Labelled label="secondary → #96DBF6"><Button variant="secondary">Learn about our support</Button></Labelled>
      </Blk>
      <Blk title="System additions" code='variant="sky" | "outline" | "ghost"'>
        <Labelled label="sky"><Button variant="sky">Join us</Button></Labelled>
        <Labelled label="outline"><Button variant="outline">Our company</Button></Labelled>
        <Labelled label="ghost"><Button variant="ghost">Learn more</Button></Labelled>
      </Blk>
      <Blk title="On a navy surface" code='variant="onDark"' tone="navy">
        <Labelled label="onDark"><Button variant="onDark">Create my account</Button></Labelled>
        <Labelled label="sky"><Button variant="sky">Explore</Button></Labelled>
      </Blk>
      <Blk title="Sizes" code='size="sm" | "md" | "lg"'>
        <Labelled label="sm"><Button size="sm">Small</Button></Labelled>
        <Labelled label="md — default"><Button size="md">Medium</Button></Labelled>
        <Labelled label="lg"><Button size="lg">Large</Button></Labelled>
      </Blk>
      <Blk title="With icons" code="iconLeft / iconRight">
        <Button iconLeft={<Icon name="search" size="sm" />}>Search products</Button>
        <Button variant="secondary" iconRight={<Icon name="arrow-right" size="sm" />}>Newsroom</Button>
        <Button variant="outline" iconLeft={<Icon name="download" size="sm" />}>Download</Button>
      </Blk>
      <Blk title="Disabled" code="disabled">
        <Labelled label="#93A9BC"><Button disabled>Primary</Button></Labelled>
        <Labelled label="#DAEDF5"><Button variant="secondary" disabled>Secondary</Button></Labelled>
        <Labelled label="outline"><Button variant="outline" disabled>Outline</Button></Labelled>
      </Blk>
      <Blk title="Shape & width" code="pill / fullWidth" layout="col">
        <div><span className="lbl">pill — system convention, no pill exists in production</span><Button pill>Rounded</Button></div>
        <div><span className="lbl">fullWidth</span><Button fullWidth>Continue to checkout</Button></div>
      </Blk>
    </Sec>
  );
}

function IconButtonSec() {
  return (
    <Sec id="iconbutton" title="IconButton" note="Icon-only control. md is 44px — the WCAG floor, and the default rather than a large variant.">
      <Blk title="Variants" code='variant="solid" | "sky" | "ghost" | "subtle"'>
        <Labelled label="solid"><IconButton variant="solid" label="Cart"><Icon name="cart" /></IconButton></Labelled>
        <Labelled label="sky"><IconButton variant="sky" label="Search"><Icon name="search" /></IconButton></Labelled>
        <Labelled label="ghost — default"><IconButton variant="ghost" label="Settings"><Icon name="gear" /></IconButton></Labelled>
        <Labelled label="subtle"><IconButton variant="subtle" label="More"><Icon name="menu-dots" /></IconButton></Labelled>
      </Blk>
      <Blk title="Sizes & disabled" code='size="sm" | "md" | "lg"'>
        <Labelled label="sm"><IconButton size="sm" variant="solid" label="Close"><Icon name="close" size="sm" /></IconButton></Labelled>
        <Labelled label="md — 44px"><IconButton size="md" variant="solid" label="Close"><Icon name="close" /></IconButton></Labelled>
        <Labelled label="lg"><IconButton size="lg" variant="solid" label="Close"><Icon name="close" size="lg" /></IconButton></Labelled>
        <Labelled label="disabled"><IconButton variant="solid" disabled label="Close"><Icon name="close" /></IconButton></Labelled>
      </Blk>
    </Sec>
  );
}

function IconSec() {
  const sample = ['cart', 'pedigree', 'prescription', 'formulary-list', 'hazmat', 'shiponice', 'shipping', 'previouslypurchased', 'tag-percentage', 'locator', 'user', 'gear', 'filter', 'search', 'download', 'pdf', 'excel', 'phone', 'email', 'help'];
  return (
    <Sec id="icon" title="Icon"
      note="A glyph from the official 93-glyph Patterson icon font. It inherits colour and scales with font-size — there is no stroke to set.">
      <Blk title="Sizes" code='size="sm" | "md" | "lg" | any CSS length'>
        <Labelled label="sm — 14px, production default"><Icon name="cart" size="sm" /></Labelled>
        <Labelled label="md — 20px"><Icon name="cart" size="md" /></Labelled>
        <Labelled label="lg — 24px"><Icon name="cart" size="lg" /></Labelled>
        <Labelled label='size="44px"'><Icon name="cart" size="44px" /></Labelled>
      </Blk>
      <Blk title="Colour is inherited" code="color / currentColor">
        <Labelled label="default"><Icon name="pedigree" size="lg" /></Labelled>
        <Labelled label="navy"><Icon name="pedigree" size="lg" color="var(--pat-navy)" /></Labelled>
        <Labelled label="sky"><Icon name="pedigree" size="lg" color="var(--pat-sky)" /></Labelled>
        <Labelled label="teal"><Icon name="pedigree" size="lg" color="var(--pat-teal)" /></Labelled>
      </Blk>
      <Blk title="Twenty of ninety-three" code="see brand-icons.card.html">
        {sample.map(n => (
          <div key={n} style={{ width: 92, textAlign: 'center' }}>
            <Icon name={n} size="24px" color="var(--pat-navy)" />
            <span className="lbl" style={{ marginTop: 7, marginBottom: 0, wordBreak: 'break-all' }}>{n}</span>
          </div>
        ))}
      </Blk>
    </Sec>
  );
}

function BadgeSec() {
  const tones = ['navy', 'sky', 'green', 'teal', 'purple', 'gray', 'warning', 'danger'];
  return (
    <Sec id="badge" title="Badge" note="Small pill label. Green, teal and purple come from the tertiary palette — fine on a badge, never as page chrome.">
      <Blk title="Soft — default" code="tone">
        {tones.map(t => <Badge key={t} tone={t}>{t}</Badge>)}
      </Blk>
      <Blk title="Solid" code="solid">
        {tones.map(t => <Badge key={t} tone={t} solid>{t}</Badge>)}
      </Blk>
      <Blk title="In use">
        <Badge tone="sky" solid>New</Badge>
        <Badge tone="green">In stock</Badge>
        <Badge tone="warning">Backordered</Badge>
        <Badge tone="danger">Discontinued</Badge>
        <Badge tone="purple">Rx</Badge>
        <Badge tone="teal">Cold chain</Badge>
      </Blk>
    </Sec>
  );
}

function StatSec() {
  return (
    <Sec id="stat" title="Stat" note="The signature device. Numbers are how this brand proves things — render them big.">
      <Blk title="Tones" code='tone="sky" | "navy" | "teal" | "green"' layout="grid4">
        <Stat value="1877" label="Serving practices since" />
        <Stat value="98%" label="Of customers reached in 1-to-2-day shipping" tone="navy" />
        <Stat value="60" label="Fulfillment centers across North America" tone="teal" />
        <Stat value="86M" label="U.S. households with pets" tone="green" />
      </Blk>
      <Blk title="Centred" code='align="center"' layout="grid3">
        <Stat value="1877" label="Founded" align="center" />
        <Stat value="98%" label="1-to-2-day shipping" align="center" />
        <Stat value="60" label="Fulfillment centers" align="center" />
      </Blk>
    </Sec>
  );
}

function CardSec() {
  return (
    <Sec id="card" title="Card" note="White surface, hairline border, 10px radius. The system's workhorse container.">
      <Blk title="Elevation" code='elevation="none" | "xs" | "sm" | "md" | "lg"' layout="grid3">
        <Card elevation="none"><b style={{ color: 'var(--pat-navy)' }}>none</b><p className="small" style={{ marginTop: 6 }}>Flat, border only.</p></Card>
        <Card elevation="sm"><b style={{ color: 'var(--pat-navy)' }}>sm — default</b><p className="small" style={{ marginTop: 6 }}>The resting state.</p></Card>
        <Card elevation="lg"><b style={{ color: 'var(--pat-navy)' }}>lg</b><p className="small" style={{ marginTop: 6 }}>Matches the hover lift.</p></Card>
      </Blk>
      <Blk title="Accent stripe" code='accent="sky" | "navy" | …' layout="grid3">
        <Card accent="sky"><b style={{ color: 'var(--pat-navy)' }}>Dental</b><p className="small" style={{ marginTop: 6 }}>Equipment, consumables and service for oral-health practices.</p></Card>
        <Card accent="teal"><b style={{ color: 'var(--pat-navy)' }}>Companion animal</b><p className="small" style={{ marginTop: 6 }}>Pharmaceuticals and practice technology for veterinary teams.</p></Card>
        <Card accent="green"><b style={{ color: 'var(--pat-navy)' }}>Production animal</b><p className="small" style={{ marginTop: 6 }}>Herd-health products built for scale and cold-chain integrity.</p></Card>
      </Blk>
      <Blk title="Interactive — hover to lift 3px" code="interactive" layout="grid3">
        <Card interactive><Icon name="cart" size="lg" color="var(--pat-sky)" /><b style={{ display: 'block', color: 'var(--pat-navy)', marginTop: 12 }}>Order supplies</b><p className="small" style={{ marginTop: 6 }}>Reorder from your last invoice.</p></Card>
        <Card interactive><Icon name="locator" size="lg" color="var(--pat-sky)" /><b style={{ display: 'block', color: 'var(--pat-navy)', marginTop: 12 }}>Find a rep</b><p className="small" style={{ marginTop: 6 }}>Local support in your territory.</p></Card>
        <Card interactive><Icon name="help" size="lg" color="var(--pat-sky)" /><b style={{ display: 'block', color: 'var(--pat-navy)', marginTop: 12 }}>Equipment repair</b><p className="small" style={{ marginTop: 6 }}>Book a technician visit.</p></Card>
      </Blk>
    </Sec>
  );
}

/* --------------------------------------------------------------- Forms */

function InputSec() {
  const [v, setV] = useState('');
  return (
    <Sec id="input" title="Input" note="2px radius with the warm taupe #AFA593 border — production's field border, and the brand's one non-cool grey.">
      <Blk title="States" code="helper / error / disabled" layout="grid3">
        <Input label="Practice name" placeholder="Riverside Dental" />
        <Input label="Email" placeholder="you@practice.com" helper="We'll only use this for order updates." />
        <Input label="Account number" defaultValue="884-2" error="That account number is not recognised." />
      </Blk>
      <Blk title="More states" code="disabled / required / iconLeft" layout="grid3">
        <Input label="Territory" defaultValue="Upper Midwest" disabled />
        <Input label="Phone" placeholder="(651) 555-0134" required />
        <Input label="Search" placeholder="Search products" iconLeft={<Icon name="search" size="sm" />} />
      </Blk>
      <Blk title="Controlled" code="value / onChange" layout="grid3">
        <Input label="Type something" value={v} onChange={e => setV(e.target.value)} placeholder="Start typing…" />
        <div style={{ alignSelf: 'end', paddingBottom: 10 }}><span className="lbl">value</span><code>{v || '(empty)'}</code></div>
      </Blk>
    </Sec>
  );
}

function SelectSec() {
  return (
    <Sec id="select" title="Select" note="Native select restyled with the brand chevron and the sky focus ring.">
      <Blk title="Options as strings or objects" code="options" layout="grid3">
        <Select label="Market" options={['Dental', 'Companion animal', 'Production animal']} />
        <Select label="Sort by" options={[{ value: 'rel', label: 'Relevance' }, { value: 'az', label: 'Name A–Z' }, { value: 'new', label: 'Newest' }]} />
        <Select label="Territory" options={['Upper Midwest']} disabled />
      </Blk>
    </Sec>
  );
}

function CheckboxSec() {
  const [on, setOn] = useState(true);
  return (
    <Sec id="checkbox" title="Checkbox">
      <Blk title="States" code="checked / defaultChecked / disabled" layout="col">
        <Checkbox label="Email me order updates" defaultChecked />
        <Checkbox label="Send the monthly practice newsletter" />
        <Checkbox label="Controlled — click me" checked={on} onChange={e => setOn(e.target.checked)} />
        <Checkbox label="Disabled, unchecked" disabled />
        <Checkbox label="Disabled, checked" disabled defaultChecked />
      </Blk>
    </Sec>
  );
}

function RadioSec() {
  const [val, setVal] = useState('two-day');
  return (
    <Sec id="radio" title="Radio" note="Radio.Group manages a set and its selection.">
      <Blk title="Group — column" code="Radio.Group" layout="col">
        <Radio.Group name="ship" value={val} onChange={setVal} direction="column"
          options={[{ value: 'two-day', label: '1-to-2-day shipping (standard)' }, { value: 'ground', label: 'Ground' }, { value: 'cold', label: 'Cold chain — ships on ice' }]} />
        <span className="lbl" style={{ marginBottom: 0 }}>selected: {val}</span>
      </Blk>
      <Blk title="Group — row" code='direction="row"'>
        <Radio.Group name="market" defaultValue="dental" direction="row" options={['Dental', 'Veterinary']} />
      </Blk>
      <Blk title="Single & disabled" layout="col">
        <Radio name="x" label="Standalone radio" defaultChecked />
        <Radio name="y" label="Disabled" disabled />
      </Blk>
    </Sec>
  );
}

function SwitchSec() {
  const [on, setOn] = useState(true);
  return (
    <Sec id="switch" title="Switch" note="The one control where sky is the resting on-state fill.">
      <Blk title="States" code="checked / disabled" layout="col">
        <Switch label="Show out-of-stock products" defaultChecked />
        <Switch label="Substitute generics when available" />
        <Switch label="Controlled — click me" checked={on} onChange={e => setOn(e.target.checked)} />
        <Switch label="Disabled, off" disabled />
        <Switch label="Disabled, on" disabled defaultChecked />
      </Blk>
    </Sec>
  );
}

/* ------------------------------------------------------------ Feedback */

function AlertSec() {
  const [open, setOpen] = useState(true);
  return (
    <Sec id="alert" title="Alert" note="Semantics are drawn from the tertiary palette, so an alert never looks foreign on a Patterson page.">
      <Blk title="Tones" code='tone="info" | "success" | "warning" | "danger" | "brand"' layout="col">
        <Alert tone="info">Your next scheduled order ships Tuesday.</Alert>
        <Alert tone="success">Order 44-8821 has been confirmed.</Alert>
        <Alert tone="warning">Two items are backordered and will ship separately.</Alert>
        <Alert tone="danger">This product requires a valid prescription on file.</Alert>
        <Alert tone="brand">Advantage Rewards members earn double points this month.</Alert>
      </Blk>
      <Blk title="With titles" code="title" layout="col">
        <Alert tone="success" title="Order confirmed">A confirmation has been sent to orders@riversidedental.com.</Alert>
        <Alert tone="warning" title="Partial shipment">Two of six items are backordered. The rest ship today.</Alert>
      </Blk>
      <Blk title="Dismissible" code="onClose" layout="col">
        {open
          ? <Alert tone="info" title="Heads up" onClose={() => setOpen(false)}>Click the dismiss control to close this.</Alert>
          : <Button variant="outline" size="sm" onClick={() => setOpen(true)}>Restore alert</Button>}
      </Blk>
    </Sec>
  );
}

function TabsSec() {
  const [t, setT] = useState('dental');
  return (
    <Sec id="tabs" title="Tabs" note="Active tab is navy text over a 3px sky underline. Never a filled pill tab.">
      <Blk title="Controlled" code="value / onChange" layout="col">
        <Tabs value={t} onChange={setT}
          tabs={[{ value: 'dental', label: 'Dental' }, { value: 'companion', label: 'Companion animal' }, { value: 'production', label: 'Production animal' }]} />
        <p className="body" style={{ fontSize: 15, margin: 0 }}>
          {t === 'dental' && 'Equipment, consumables, software and service for oral-health practices of every size.'}
          {t === 'companion' && 'Pharmaceuticals, supplies and practice technology for veterinary teams.'}
          {t === 'production' && 'Herd-health products and logistics built for scale and cold-chain integrity.'}
        </p>
      </Blk>
      <Blk title="Uncontrolled, string tabs" code="defaultValue">
        <Tabs tabs={['Overview', 'Specifications', 'Documents', 'Reviews']} defaultValue="Overview" />
      </Blk>
    </Sec>
  );
}

/* --------------------------------------------------------- Foundations */

function ColourSec() {
  const groups = [
    ['Brand', [['navy', '#003767'], ['sky', '#00A8E1'], ['blue', '#147EC2'], ['blue-light', '#6DCFF6']]],
    ['Tertiary — charts only', [['green', '#7BC24D'], ['teal', '#00817D'], ['purple', '#522E91']]],
    ['Interaction states', [['primary-hover', '#315D83'], ['primary-disabled', '#93A9BC'], ['secondary-hover', '#96DBF6'], ['secondary-disabled', '#DAEDF5']]],
    ['Neutral', [['ink', '#1d1d20'], ['gray', '#58585B'], ['gray-warm', '#AFA593'], ['hairline', '#e2e2e4'], ['surface-muted', '#ECECEC']]],
    ['Semantic', [['success', '#00817D'], ['info', '#147EC2'], ['warning', '#d98a00'], ['danger', '#c0392b']]],
  ];
  return (
    <Sec id="colour" title="Colour" note="Every brand hex, straight from tokens/colors.css.">
      {groups.map(([name, list]) => (
        <Blk key={name} title={name}>
          <div className="swz" style={{ width: '100%' }}>
            {list.map(([n, hex]) => (
              <div key={n}><div className="chip" style={{ background: hex }} /><span>{n}<br />{hex}</span></div>
            ))}
          </div>
        </Blk>
      ))}
    </Sec>
  );
}

function TypeSec() {
  const rows = [
    ['h1', 'Trusted expertise', 44, 800, '2.75rem / 3rem · desktop 4rem'],
    ['h2', 'Unrivaled support', 36, 800, '2.25rem / 2.5rem · desktop 2.75rem'],
    ['h3', 'We strengthen the people who keep us healthy', 24, 400, '1.5rem / 1.75rem · weight 400'],
    ['h4', 'Bold solutions, personal touch', 24, 400, '1.5rem / 1.75rem · weight 400'],
    ['body', 'Generations of quality customer service define our business operations and our personal interactions.', 18, 400, '1.125rem / 1.5rem · ratio 1.33'],
    ['eyebrow', 'Trusted expertise', 14, 500, '0.875rem · navy, sentence case, no tracking'],
    ['button', 'Explore solutions', 15, 600, '0.9375rem / 1.25rem'],
  ];
  return (
    <Sec id="typescale" title="Type" note="The production scale — the exact values the live theme ships. Note the hard weight drop from 800 at h1/h2 to 400 at h3.">
      <Blk title="Production scale" code="--pt-*" layout="col">
        {rows.map(([tok, txt, size, weight, meta]) => (
          <div key={tok} style={{ display: 'flex', gap: 24, alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: 12 }}>
            <span style={{ color: 'var(--pat-navy)', fontSize: size, fontWeight: weight, lineHeight: 1.2, maxWidth: 520 }}>{txt}</span>
            <span className="lbl" style={{ marginBottom: 0, textAlign: 'right', whiteSpace: 'nowrap' }}>{tok}<br />{meta}</span>
          </div>
        ))}
      </Blk>
    </Sec>
  );
}

function SpacingSec() {
  const steps = [['1', 4], ['2', 8], ['3', 12], ['4', 16], ['5', 24], ['6', 32], ['7', 40], ['8', 48], ['9', 64], ['10', 80], ['11', 96], ['12', 128]];
  return (
    <Sec id="spacing" title="Spacing" note="A 4px base unit. Section rhythm runs 64–128px; 96px is the default between bands.">
      <Blk title="Scale" code="--space-*">
        <div className="spc" style={{ width: '100%' }}>
          {steps.map(([n, px]) => (
            <div key={n}><em>--space-{n}</em><i style={{ width: px }} /><em style={{ width: 'auto' }}>{px}px</em></div>
          ))}
        </div>
      </Blk>
    </Sec>
  );
}

function RadiiSec() {
  const prod = [['field', 2, 'input, select'], ['btn', 5, '.btn'], ['btn-elevated', 6, 'download / external']];
  const sys = [['sm', 4], ['md', 6], ['lg', 10], ['xl', 16], ['2xl', 24], ['pill', 999]];
  const box = { width: 88, height: 54, background: 'var(--pat-sky-10)', border: '1px solid var(--pat-sky)' };
  return (
    <Sec id="radii" title="Radii" note="Production is restrained — 5px buttons, 2px fields. There is no pill radius in the live stylesheet.">
      <Blk title="Production-verified" code="--radius-btn / --radius-field">
        {prod.map(([n, r, use]) => (
          <div key={n} style={{ textAlign: 'center' }}>
            <div style={{ ...box, borderRadius: r }} />
            <span className="lbl" style={{ marginTop: 7, marginBottom: 0 }}>{n} · {r}px<br />{use}</span>
          </div>
        ))}
      </Blk>
      <Blk title="System scale" code="--radius-*">
        {sys.map(([n, r]) => (
          <div key={n} style={{ textAlign: 'center' }}>
            <div style={{ ...box, borderRadius: r, width: n === 'pill' ? 100 : 88 }} />
            <span className="lbl" style={{ marginTop: 7, marginBottom: 0 }}>{n}{n === 'pill' ? ' (system)' : ' · ' + r + 'px'}</span>
          </div>
        ))}
      </Blk>
    </Sec>
  );
}

function ShadowSec() {
  return (
    <Sec id="shadows" title="Shadows" note="Five navy-tinted steps. Production instead uses neutral black at 4–12% alpha — either reads correctly, so long as alpha stays low.">
      <Blk title="Elevation" code="--shadow-*">
        <div className="shd" style={{ width: '100%' }}>
          {['xs', 'sm', 'md', 'lg', 'xl'].map(s => (
            <div key={s} style={{ boxShadow: `var(--shadow-${s})` }}>{s}</div>
          ))}
        </div>
      </Blk>
      <Blk title="Focus ring" code="--ring-focus">
        <button className="btn btn-primary" style={{ boxShadow: 'var(--ring-focus)' }}>Focused</button>
        <input className="pat-field" defaultValue="Focused field" style={{ border: '1px solid var(--pat-sky)', borderRadius: 2, padding: '11px 12px', fontFamily: 'inherit', fontSize: 16, boxShadow: 'var(--ring-focus)' }} />
        <span className="lbl" style={{ marginBottom: 0 }}>3px sky ring — never removed</span>
      </Blk>
    </Sec>
  );
}

/* ----------------------------------------------------------------- App */

function App() {
  if (!Button) {
    return <div className="note warn" style={{ marginTop: 40 }}><b>The component bundle didn't load.</b> Expected <code>window.PattersonCompaniesDesignSystem_3534f9</code> from <code>../_ds_bundle.js</code>.</div>;
  }
  return (
    <React.Fragment>
      <ButtonSec /><IconButtonSec /><IconSec /><BadgeSec /><StatSec /><CardSec />
      <InputSec /><SelectSec /><CheckboxSec /><RadioSec /><SwitchSec />
      <AlertSec /><TabsSec />
      <ColourSec /><TypeSec /><SpacingSec /><RadiiSec /><ShadowSec />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
