import { writeFileSync, mkdirSync, rmSync } from "fs";

export function genCode(width = 30, depth = 30) {
  rmSync("src", { recursive: true, force: true });
  mkdirSync("./src");

  function write(path: string, data: string) {
    writeFileSync(
      path,
      `${data}
const content = \`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue molestie varius. Nam fermentum justo auctor lacus ultrices rhoncus at at dolor. Maecenas sed ligula ac quam ornare mollis eget vitae leo. Fusce nulla neque, ornare at dui et, porta semper nulla. Pellentesque ultrices justo sollicitudin metus ultrices, in aliquam libero bibendum. Vivamus ultrices venenatis ligula, at pellentesque tellus porttitor vitae. Duis imperdiet ultricies tincidunt. Nunc vitae iaculis orci, eu varius nibh. Ut luctus ligula non justo efficitur, non dapibus enim maximus. Vivamus ligula magna, venenatis in maximus in, fringilla nec sapien. In interdum, metus eu vestibulum interdum, nunc massa mattis nisi, id condimentum nisl nisi vitae quam. Proin ultricies sit amet sem vitae molestie.

Donec ac felis ac augue tempus scelerisque. Sed nibh lectus, dignissim quis rhoncus ut, consequat sed leo. Suspendisse molestie cursus efficitur. Suspendisse hendrerit diam non tellus volutpat, in pulvinar sapien placerat. Aenean suscipit est arcu, in vehicula dui ornare nec. Curabitur fermentum arcu et odio luctus, nec sodales neque porttitor. Aenean elementum mauris eu dolor feugiat maximus. Vivamus hendrerit turpis dolor, nec venenatis arcu rhoncus eget.

Pellentesque eget congue felis. In at quam at purus condimentum bibendum non ac ligula. Praesent auctor sagittis sapien id congue. Ut dignissim diam in est semper tempus. Donec placerat ex finibus velit tincidunt rutrum. Phasellus faucibus mattis massa vestibulum pretium. Nam scelerisque, velit mattis consequat dignissim, sem ante dignissim est, vitae gravida est ante eu lorem.

Maecenas at est mollis, tristique nisi at, semper felis. Suspendisse ac consequat velit. Sed id erat euismod, consequat massa ac, dapibus tortor. Praesent auctor eros id sapien imperdiet, quis aliquet sapien vestibulum. Nunc cursus semper diam eget aliquam. Aliquam eu lorem ac erat cursus commodo eu vitae leo. Praesent in erat lorem. Aenean sem nunc, sodales at semper a, finibus a odio. Donec nec urna pulvinar, finibus dui eu, vestibulum enim. Etiam dapibus urna id consectetur malesuada. Suspendisse non nisi diam.

Praesent quis lobortis velit. Sed molestie, nibh sed bibendum vulputate, erat nulla dignissim est, in bibendum nisi enim et sapien. Ut suscipit blandit sem eget blandit. Nullam rhoncus, dolor in porttitor auctor, elit justo auctor erat, ultrices cursus velit velit semper odio. Sed luctus risus eros, non pretium ex auctor in. Sed nisi elit, lacinia eu consequat et, semper eget purus. Vivamus finibus feugiat tortor, et fermentum urna aliquet et. Etiam ultricies sem in enim convallis scelerisque.

Mauris a sapien eget sapien faucibus euismod at sit amet tortor. Pellentesque viverra metus libero, sit amet lobortis velit tempus et. Aliquam efficitur massa urna. Cras tincidunt nisi eget lorem mattis gravida. Nulla pharetra odio nec odio aliquam, vitae rhoncus nulla ornare. Maecenas ut ultrices libero. Maecenas magna lacus, condimentum id nunc vitae, pulvinar vestibulum urna. Integer quam sapien, tincidunt sed fermentum ut, tempor id nisi. Vivamus commodo porttitor lacus. Suspendisse blandit mauris eu euismod ultricies. In efficitur urna lorem, ac facilisis risus ultricies id. Nunc tempor tortor felis, ac tristique erat consectetur aliquet. Vivamus vulputate nibh ut velit vehicula porta. Aenean accumsan erat et augue imperdiet, eu finibus velit accumsan.

Morbi nec justo vitae sapien laoreet maximus sed quis tortor. In laoreet, ante sit amet posuere porttitor, nulla nisl sagittis mauris, sed vehicula odio urna ut felis. Donec blandit arcu ut augue pharetra, sed ultricies tortor volutpat. Maecenas euismod semper lorem quis efficitur. In vehicula erat dui, non porttitor lorem egestas a. Vivamus iaculis tristique convallis. Praesent mauris lorem, blandit vitae tempor ultricies, tincidunt vel enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam vel nunc sed dolor porttitor vestibulum. Pellentesque lacus orci, consectetur venenatis mauris lacinia, bibendum pulvinar tellus. Ut sed ante scelerisque, consectetur neque vitae, condimentum metus. Cras eu varius risus. Vivamus ac nulla rhoncus, laoreet mi non, vulputate felis. Vestibulum consequat purus sit amet luctus condimentum. Pellentesque quis bibendum augue.

Vivamus eget sodales lorem, ut pretium ex. Aenean dapibus accumsan aliquet. Nulla facilisi. Duis a faucibus massa. Suspendisse metus arcu, dignissim non feugiat sed, pulvinar ac est. Maecenas in enim non libero blandit molestie. Donec ultricies tempus laoreet. Quisque hendrerit, ligula sit amet semper auctor, dolor leo dignissim justo, in vulputate sem sapien iaculis arcu. Maecenas eget ultricies ante, sit amet vulputate neque. Praesent accumsan maximus tellus. Donec sagittis urna felis, ut scelerisque orci imperdiet id. Vivamus euismod, ipsum eget faucibus pellentesque, metus sem rutrum erat, non consequat nulla felis et nunc.

Maecenas lacinia lectus quis purus convallis laoreet. In pellentesque tellus in urna tempus vestibulum. Pellentesque ornare sapien sit amet ex dictum molestie. Aenean molestie pharetra porttitor. Sed nunc erat, mollis vulputate dictum quis, dictum pulvinar nisi. Etiam id leo augue. Duis dignissim luctus nunc sit amet vehicula.

Quisque pulvinar tortor id blandit commodo. Cras sodales tortor a posuere dictum. In sed nisl aliquam, interdum turpis sed, interdum eros. In tempor, mauris non sodales dignissim, nibh ipsum luctus ipsum, at eleifend orci magna nec velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus a massa dui. Sed pretium enim vitae sem vestibulum, vitae pellentesque odio viverra. Suspendisse porta orci vitae eros aliquet, in condimentum sapien laoreet. Donec cursus suscipit odio at eleifend.
\`
window.count++`,
    );
  }

  const paths: string[] = [];

  const generate = (
    dir: string,
    ext: string,
    nextImp: (i: number) => string,
  ) => {
    mkdirSync(`./src/${dir}`);
    for (let i = 1; i < depth; i++) {
      write(`src/${dir}/${i}.${ext}`, `import "${nextImp(i + 1)}"`);
      paths.push(`src/${dir}/${i}.${ext}`);
    }
    write(`src/${dir}/${depth}.${ext}`, ``);
    paths.push(`src/${dir}/${depth}.${ext}`);
  };

  let rootImports = ``;
  for (let i = 0; i < width; i++) {
    generate(`dir${i}`, `ts`, (j) => `/src/dir${i}/${j}.ts`);
    rootImports += `import './dir${i}/1.ts'\n`;
  }

  writeFileSync(
    `src/entry.js`,
    `
${rootImports}
const app = document.createElement("div");
app.id = "app";
app.textContent = window.count + ' TypeScript modules (import graph width:${width} x depth:${depth}) loaded in ' + (performance.now() - window.start).toFixed(2) + 'ms';
document.body.appendChild(app);
`,
  );

  writeFileSync(
    `src/preload.js`,
    `${paths
      .map(
        (path) =>
          `document.body.appendChild(Object.assign(document.createElement('link'), { rel: "modulepreload", href: "./${path}" } ))`,
      )
      .join(";")}`,
  );
}
