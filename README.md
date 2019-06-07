# sistema-st

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Padrões de código

Para manter uma boa organização, legibilidade e manutenabilidade do código, é necessário que a codebase esteja coesa. Para isso, os desenvolvedores deverão seguir o padrão de código descrito a seguir:

## Tags com várias propriedades devem quebrar linhas

Se um Tags possuir mais de uma propriedade, então, por questões de legibilidade, cada propriedade deverá ficar em uma linha e o fechamento da tag deve ser feito em uma nova linha

### Errado

```html
<input foo="foo" bar="bar" tar="tar" gz="gz" />
```


### Certo

```html
<input 
  foo="foo" 
  bar="bar" 
  tar="tar" 
  gz="gz" 
/>

<input foo="foo" />
```

## Manter a consistência entre diretivas (Utilizar forma abreviada)

Todas as diretivas devem ser usadas na forma abreviada

### Errado

```html
<input
  v-bind:value="newTodoText"
  v-bind:placeholder="newTodoInstructions"
>
```


### Certo

```html
<input
  :value="newTodoText"
  :placeholder="newTodoInstructions"
>

```

## Arquivos de componente devem utilizar PascalCase

### Errado

```
components/
| - main-component.vue
| - genericComponent.vue
```


### Certo

```
components/
| - MainComponent.vue
| - GenericComponent.vue
```

## Arquivos de informações de componente devem utilizar Kebab-Case

### Errado

```
componentesInfo/
| - registerClass.vue
| - RegisterGroup.vue
```


### Certo

```
componentesInfo/
| - register-class.vue
| - regsiter-group.vue
```


## Componentes ordinários devem ser multi-palavras

Um componente ordinário nunca deve possuir apenas uma palavra para previnir conflitos com elementos HTML.

### Errado

```javascript
export default {
  name: 'component',
  // ...
}
```


### Certo

```javascript
export default {
  name: 'main-component',
  // ...
}
```

## Componentes principais devem ser possuir o prefixo "the"

Os componentes principais e que possuem apenas uma instância no código deve possuir o prefixo "the" para determinar que aquela é uma instância unica

### Errado

```
components/
| - header.vue
| - menu.vue
```


```javascript
export default {
  name: 'header',
  // ...
}
```


### Certo

```
components/
| - TheHeader.vue
| - TheMenu.vue
```

```javascript
export default {
  name: 'the-menu',
  // ...
}
```




## A propriedade 'data' de um component DEVE ser uma função.

Quando usar a propriedade data de um componente, o valor deve ser uma função que retorna um objeto.

### Errado

```javascript
export default {
  data: {
    foo: 'bar'
  }
}
```


### Certo

```javascript
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
```


## Definições de props

Todas as props devem possuir o máximo de detalhes possível

### Errado

```javascript
// Isso é OK somente se for um protótipo
props: ['status']
```


### Certo

```javascript
props: {
  status: String,
  required: true
}
```

## Sempre usar :key para o v-for

Sempre que usar o v-for, o desenvolvedor deverá atribuir uma key para o componente que está sendo criado

### Errado

```html
<ul>
  <li v-for="estudante in estudantes">
    {{ estudante.nome }}
  </li>
</ul>
```


### Certo

```html
<ul>
  <li
    v-for="estudante in estudantes"
    :key="estudante.id"
  >
    {{ estudante.nome }}
  </li>
</ul>
```

## Evitar o uso de v-if junto com v-for

É expressamente proibido que o desenvolvedor utilizar v-for e v-if para um mesmo componente. Caso a ação seja necessária, utilize as propridades computed

### Errado

```html
<ul>
  <li
    v-for="estudante in estudantes"
    v-if="estudante.estaMatriculado"
    :key="estudante.id"
  >
    {{ estudante.name }}
  </li>
</ul>
```


### Certo

```html
<ul>
  <li
    v-for="estudante in estudantesAtivos"
    :key="estudante.id"
  >
    {{ estudante.name }}
  </li>
</ul>
```

```javascript
computed: {
  estudantesAtivos: function(){
    return estudantes.filter(e => e.estaMatriculado)
  }
}
```
## Usar componentes com estilo escopado

Ao criar um componente que possua uma tag `<style>` o desenvolvedor deverá atribuir a tag o atributo `scoped` para garantir que aquele CSS pertence apenas a aquela classe.

### Errado

```html
<style>
.
.
.
</style>
```


### Errado

```html
<style scoped>
.
.
.
</style>
```




