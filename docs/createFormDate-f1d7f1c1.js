function a(a,e="POST"){const n=new FormData;for(const r of a.fields){const{value:a}=r.state;"PATCH"===e&&r.defaultValue===a||(Array.isArray(a)?a.forEach((a=>n.append(r.name,a))):n.append(r.name,a))}return n}export{a as c};