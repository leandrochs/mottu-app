// C:\Users\3silv\Documents\DEVELOPER\GitHub\mottu-app\backend\MottuMaintenance\Controllers\MecanicoController.cs

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MottuMaintenance.Data;
using MottuMaintenance.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MottuMaintenance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MecanicoController : ControllerBase
    {
        private readonly MottuContext _context;

        public MecanicoController(MottuContext context)
        {
            _context = context;
        }

        // GET: api/Mecanico
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Mecanico>>> GetMecanicos()
        {
            return await _context.Mecanicos.ToListAsync();
        }

        // GET: api/Mecanico/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Mecanico>> GetMecanico(int id)
        {
            var mecanico = await _context.Mecanicos.FindAsync(id);

            if (mecanico == null)
            {
                return NotFound();
            }

            return mecanico;
        }

        // POST: api/Mecanico
        [HttpPost]
        public async Task<ActionResult<Mecanico>> PostMecanico(Mecanico mecanico)
        {
            _context.Mecanicos.Add(mecanico);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMecanico), new { id = mecanico.MecanicoId }, mecanico);
        }

        // Adicione métodos PUT e DELETE conforme necessário
    }
}